
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const validateApiKey = require("../middleware/auth"); // Middleware validasi API key

const router = express.Router();

// Enable CORS for all domains
router.use(cors({ origin: "*" }));

// API Key YouTube
const YOUTUBE_API_KEY = "AIzaSyBCHgsvXcZKl_qS3-vMGpT1FRRib_xhXpQ";

// ID channel YouTube JKT48
const CHANNEL_IDS = [
  "UCyam-qAWHwBoVnTNXk3gHbQ", // Channel utama JKT48
  "UCIa2OxCyhjWjJke-9yYNbwA",
  "UCnSv209ePY7gJRPJSBns4gw"// Channel Academy / Subsidiary
];

// Fungsi untuk mengambil live stream yang sedang berlangsung
async function getLiveStream(channelId) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          key: YOUTUBE_API_KEY,
          channelId,
          part: "snippet",
          eventType: "live", // hanya yang sedang live
          type: "video",
          maxResults: 1
        }
      }
    );

    if (!response.data.items || response.data.items.length === 0) return null;

    const video = response.data.items[0];
    const videoId = video.id.videoId;

    // Ambil detail statistik video (views)
    const videoStats = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos`,
      {
        params: {
          key: YOUTUBE_API_KEY,
          id: videoId,
          part: "statistics"
        }
      }
    );

    // Ambil detail channel (nama dan foto profil)
    const channelDetails = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels`,
      {
        params: {
          key: YOUTUBE_API_KEY,
          id: channelId,
          part: "snippet"
        }
      }
    );

    const channelInfo = channelDetails.data.items[0].snippet;

    return {
      videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      publishedAt: video.snippet.publishedAt,
      views: videoStats.data.items[0]?.statistics?.viewCount || "0",
      channelId: video.snippet.channelId,
      channelName: channelInfo.title,
      channelImage: channelInfo.thumbnails.high.url
    };
  } catch (err) {
    console.error(`Error fetching live stream for channel ${channelId}:`, err.message);
    return null;
  }
}

// Endpoint untuk mendapatkan data live streaming aktif dari JKT48
router.get("/", validateApiKey, async (req, res) => {
  try {
    const livePromises = CHANNEL_IDS.map(id => getLiveStream(id));
    
    // Handle possible Promise rejections
    const results = await Promise.allSettled(livePromises);
    
    // Filter only successful results and non-null values
    const liveStreams = results
      .filter(result => result.status === 'fulfilled' && result.value !== null)
      .map(result => result.value);
    
    // Return empty array if no live streams found
    res.json(liveStreams);
  } catch (error) {
    console.error("Error fetching live streams:", error.message);
    // Return empty array on error
    res.status(500).json([Error]);
  }
});

module.exports = router;
