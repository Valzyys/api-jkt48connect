const { Client } = require('pg'); // PostgreSQL client
const parseCustomDate = require("./helpers/dateParser");

const apiKeys = {
  JKTCONNECT: {
    expiryDate: "unli", // Tidak terbatas
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞", // Tidak terbatas
    lastAccessDate: "2024-11-20",
    seller: true,
  },
  "zlfdimari8727": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "fikzz123": {
    expiryDate: "unli",
    remainingRequests: 150,
    maxRequests: 150,
    lastAccessDate: "2024-11-20",
  },
  "SazxOfficial111": {
    expiryDate: "unli", // Tidak terbatas
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞", // Tidak terbatas
    lastAccessDate: "2024-11-20",
    seller: true,
  },
  "MarshaLenathea1234567890": {
    expiryDate: "unli", // Tidak terbatas
    remainingRequests: 250, // Tidak terbatas
    maxRequests: 250, // Tidak terbatas
    lastAccessDate: "2024-11-20",
  },
  "JKT-4F5C3D8A": {
    expiryDate: "unli",
    remainingRequests: 50,
    maxRequests: 50,
    lastAccessDate: "2024-11-20",
  },
  "J48-Mamiya": {
    expiryDate: parseCustomDate("21/11/2024/18:15"),
    remainingRequests: 50,
    maxRequests: 50,
    lastAccessDate: "2024-11-20",
  },
  "J48-2E9D4B7C": {
    expiryDate: "unli",
    remainingRequests: 50,
    maxRequests: 10,
    lastAccessDate: "2024-11-20",
  },
  "vyJsnz2$d3v": {
    expiryDate: "unli",
    remainingRequests: 150,
    maxRequests: 150,
    lastAccessDate: "2024-11-20",
  },
  "ForxFyyre": {
    expiryDate: parseCustomDate("21/11/2024/18:15"),
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞", // Tidak terbatas
    lastAccessDate: "2024-11-20",
  },
  "SAZX": {
    expiryDate: parseCustomDate("31/12/2024/18:15"),
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞", // Tidak terbatas
    lastAccessDate: "2024-11-20",
  },
};

// Koneksi database
const dbClient = new Client({
  connectionString: 'postgresql://jkt48connect_apikey:vAgy5JNXz4woO46g8fho4g@jkt48connect-7018.j77.aws-ap-southeast-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full',
});

// Sinkronisasi data ke database
async function syncApiKeysWithDatabase() {
  try {
    await dbClient.connect();
    console.log("Database connected successfully.");

    // Ambil data API keys dari database
    const result = await dbClient.query("SELECT * FROM api_keys");
    const dbApiKeys = result.rows.reduce((acc, row) => {
      acc[row.api_key] = {
        expiryDate: row.expiry_date,
        remainingRequests: row.remaining_requests,
        maxRequests: row.max_requests,
        lastAccessDate: row.last_access_date,
        seller: row.seller || false,
      };
      return acc;
    }, {});

    // Perbarui database berdasarkan `apiKeys` lokal
    for (const [apiKey, data] of Object.entries(apiKeys)) {
      if (!dbApiKeys[apiKey]) {
        // Tambahkan API key baru jika belum ada di database
        await dbClient.query(
          `INSERT INTO api_keys (api_key, expiry_date, remaining_requests, max_requests, last_access_date, seller) 
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [
            apiKey,
            data.expiryDate,
            data.remainingRequests,
            data.maxRequests,
            data.lastAccessDate,
            data.seller || false,
          ]
        );
        console.log(`API key ${apiKey} added to database.`);
      } else {
        // Perbarui API key jika ada perubahan
        const dbData = dbApiKeys[apiKey];
        if (
          dbData.expiryDate !== data.expiryDate ||
          dbData.remainingRequests !== data.remainingRequests ||
          dbData.maxRequests !== data.maxRequests ||
          dbData.lastAccessDate !== data.lastAccessDate ||
          dbData.seller !== (data.seller || false)
        ) {
          await dbClient.query(
            `UPDATE api_keys 
             SET expiry_date = $2, remaining_requests = $3, max_requests = $4, last_access_date = $5, seller = $6 
             WHERE api_key = $1`,
            [
              apiKey,
              data.expiryDate,
              data.remainingRequests,
              data.maxRequests,
              data.lastAccessDate,
              data.seller || false,
            ]
          );
          console.log(`API key ${apiKey} updated in database.`);
        }
      }
    }

    // Hapus API keys dari database yang tidak ada di `apiKeys` lokal
    for (const dbApiKey in dbApiKeys) {
      if (!apiKeys[dbApiKey]) {
        await dbClient.query(`DELETE FROM api_keys WHERE api_key = $1`, [dbApiKey]);
        console.log(`API key ${dbApiKey} removed from database.`);
      }
    }

    console.log("Synchronization completed.");
  } catch (error) {
    console.error("Error syncing API keys with database:", error);
  } finally {
    await dbClient.end();
    console.log("Database connection closed.");
  }
}

// Jalankan sinkronisasi
syncApiKeysWithDatabase();

module.exports = apiKeys;
