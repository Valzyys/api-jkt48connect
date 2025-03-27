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

  // Ambil waktu sekarang dalam UTC lalu konversi ke WIB (GMT+7)
  const now = new Date();
  now.setHours(now.getHours() + 7);

  // Periksa apakah API key sudah kedaluwarsa (kecuali jika "unli" atau "-")
  if (keyData.expiryDate !== "unli" && keyData.expiryDate !== "-") {
    if (now > new Date(keyData.expiryDate)) {
      return res.status(403).json({
        success: false,
        message: "API key sudah kedaluwarsa. Silakan perpanjang API key Anda di WhatsApp 6285701479245 atau wa.me/6285701479245.",
      });
    }
  }

  // Periksa limit request (∞ jika tak terbatas)
  if (keyData.remainingRequests === "∞") {
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
