const apiKeys = require("../apiKeys");

function validateApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"] || req.query.api_key;

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "API key tidak ditemukan. Harap sertakan API key di header atau query parameter.",
    });
  }

  const keyData = apiKeys[apiKey];

  if (!keyData) {
    return res.status(403).json({
      success: false,
      message: "API key tidak valid. Silakan beli API key di WhatsApp 6285701479245 atau wa.me/6285701479245.",
    });
  }

  // Periksa apakah pengguna premium
  if (!keyData.premium) {
    return res.status(403).json({
      success: false,
      message: "Fitur ini hanya tersedia untuk pengguna premium. Silakan upgrade ke premium di WhatsApp 6285701479245 atau wa.me/6285701479245.",
    });
  }

const now = new Date();
  const currentDate = now.getDate(); // Ambil tanggal hari ini
  const resetDates = [5, 10, 15, 20, 25, 30]; // Tanggal reset

  // Periksa apakah API key memiliki masa berlaku dan belum kedaluwarsa
  if (keyData.expiryDate !== "unli" && keyData.expiryDate !== "-" && now > keyData.expiryDate) {
    return res.status(403).json({
      success: false,
      message: "API key sudah kedaluwarsa. Silakan perpanjang API key Anda di WhatsApp 6285701479245 atau wa.me/6285701479245.",
    });
  }

  // Reset limit request jika hari ini adalah salah satu dari tanggal reset
  if (resetDates.includes(currentDate)) {
    keyData.remainingRequests = keyData.maxRequests === "-" ? "∞" : keyData.maxRequests; // Reset ke limit maksimum jika tidak terbatas
  }
  
  // Periksa limit request (∞ jika tak terbatas)
  if (keyData.remainingRequests === "∞") {
    // Jika limit tidak terbatas, lanjutkan tanpa pengurangan request
    return next();
  }

  // Validasi limit request
  if (keyData.remainingRequests <= 0) {
    return res.status(429).json({
      success: false,
      message: "Batas request API key Anda telah habis. Silakan hubungi WhatsApp 6285701479245 untuk membeli limit tambahan.",
    });
  }

  // Kurangi jumlah request yang tersisa
  keyData.remainingRequests -= 1;

  next();
}

module.exports = validateApiKey;
