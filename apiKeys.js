const parseCustomDate = require("./helpers/dateParser");

const apiKeys = {
  JKTCONNECT: {
    expiryDate: "unli", // Tidak terbatas
    remainingRequests: 1908239, // Tidak terbatas
    maxRequests: 3898729, // Tidak terbatas
    lastAccessDate: "2024-11-20",
    seller: true,
    premium: true,
  },
  "zlfdinhere88246h": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "TanzManuel": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "aldo": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "irfan567": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "sazxbot352c": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "sazxapi123h": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "depo": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "J48-Kyyj": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "azeexcuy": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "J48-Mamia": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "JC-SYF2AAJ": {
    expiryDate: "unli",
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞", // Tidak terbatas
    lastAccessDate: "2024-11-20",
  },
  "J48-Fans": {
    expiryDate: "unli",
    remainingRequests: "∞",
    maxRequests: "∞",
    lastAccessDate: "2024-11-20",
  },
  "J48-Kent": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "J48-Rafaa": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "J48-Relll": {
    expiryDate: parseCustomDate("21/11/2024/18:15"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "JC-U4P0FC": {
    expiryDate: parseCustomDate("30/4/2025/12:39"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "JC-R5TKDI": {
    expiryDate: parseCustomDate("30/4/2025/12:39"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "Rdzhooo75": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "Rizz Bwot": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2024-11-20",
  },
  "J48-ijull56": {
    expiryDate: "unli", // Tidak terbatas
    remainingRequests: 250, // Tidak terbatas
    maxRequests: 250, // Tidak terbatas
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "fikzz11112": {
    expiryDate: "unli",
    remainingRequests: 150,
    maxRequests: 150,
    lastAccessDate: "2024-11-20",
  },
  "marshalena": {
    expiryDate: "unli", // Tidak terbatas
    remainingRequests: 250, // Tidak terbatas
    maxRequests: 250, // Tidak terbatas
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "JKT-4F5C3D8A": {
    expiryDate: parseCustomDate("07/04/2025/00:56"),
    remainingRequests: 50,
    maxRequests: 50,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "DP-YEON32": {
    expiryDate: "unli",
    remainingRequests: 500,
    maxRequests: 500,
    lastAccessDate: "2024-11-20",
    seller: true,
    premium: true,
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
    premium: true,
  },
  "XIOVE": {
    expiryDate: "unli",
    remainingRequests: 150,
    maxRequests: 150,
    lastAccessDate: "2024-11-20",
    premium: true,
  },
  "ForxFyyre": {
    expiryDate: parseCustomDate("27/03/2025/16:51"),
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞", // Tidak terbatas
    lastAccessDate: "2024-11-20",
  },
  "SAZX": {
    expiryDate: parseCustomDate("31/12/2024/18:15"),
    remainingRequests: "∞", // Tidak terbatas
    maxRequests: "∞",
    lastAccessDate: "2024-11-20",
  },
  "Rnmzx": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true
  },
        "zurabotsigma": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },
    "sss": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },

  "dada": {
    expiryDate: "unli",
    remainingRequests: 10,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },

    "testdoang": {
    expiryDate: "unli",
    remainingRequests: 10,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },

  "JC-820BGL": {
    expiryDate: "unli",
    remainingRequests: 10,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },

  "JC-820BGLz": {
    expiryDate: "unli",
    remainingRequests: 10,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },

  "JC-820BSGLz": {
    expiryDate: "unli",
    remainingRequests: 10,
    maxRequests: 250,
    lastAccessDate: "2025-03-30",
    premium: true,
    seller: true
  },

  "JC-OQ43NB": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-03-30"
  },

  "JC-F8QH6L": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-03-31"
  },

  "JC-B6UOBO": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-04"
  },

  "JC-Y03Q3T": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-08"
  },

  "JC-RZWE8S": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-08"
  },

  "jjs": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "halahss": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "jjjkss": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "sigmabanget": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "tttatststst": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "tetssttsts": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "sjsjsjsjsjk": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "valzytamvan": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "FanzyPvt": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-13"
  },

  "JC-ZZPS0W": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-13"
  },

  "JC-94HMF0": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-16"
  },

  "SSHJKS": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-17"
  },

  "DL121848": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "VZ349197": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "VZ369391": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "HELNAH": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "VZ817758": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "VZ268448": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "DL903203": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "DL943621": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "$": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "$": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "DLILG3IM": {
    expiryDate: parseCustomDate("25/04/2025/07:20"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

      "HELNAHsss": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

 
  "VZ7GEF5G": {
    expiryDate: parseCustomDate("25/04/2025/08:06"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "DL5J7MNQ": {
    expiryDate: parseCustomDate("25/04/2025/08:19"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "VZB2GM5Y": {
    expiryDate: parseCustomDate("25/04/2025/08:21"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-18"
  },

  "JC-UAXN98": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-19"
  },

  "HELNJs": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "CL223781": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "CL2237812": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "CL162752": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "VZ774065": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "VZ599399": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "CL814785": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "VZ255527": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-19"
  },

  "CL480074": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-20"
  },

    "JJKSKS": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-21"
  },

    "TEST67": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-21"
  },

  "VALSJSJZ": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-20"
  },

  "JKSKSKSK": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-20"
  },

  "rizky": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-22"
  },

  "ricky": {
    expiryDate: "unli",
    remainingRequests: "∞",
    maxRequests: "∞",
    lastAccessDate: "2025-04-22",
    premium: true
  },

  "JC-M549QF": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-04-22"
  },

  "VZ2DZ7EH": {
    expiryDate: parseCustomDate("01/05/2025/13:31"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-24"
  },

  "VZJ3D1RT": {
    expiryDate: parseCustomDate("01/05/2025/13:35"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-24"
  },

  "CL893941": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-04-24"
  },

  "VZPG54DI": {
    expiryDate: parseCustomDate("09/05/2025/04:17"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-05-02"
  },

  "berita48": {
    expiryDate: "unli",
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-05-02",
    premium: true
  },

  "JC-H1002A": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-05-07"
  },

  "JC-V07QA5": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-05-07"
  },

  "JC-CLBMH7": {
    expiryDate: "unli",
    remainingRequests: 30,
    maxRequests: 30,
    lastAccessDate: "2025-05-07"
  },

  "DLJYF7H1": {
    expiryDate: parseCustomDate("16/05/2025/14:29"),
    remainingRequests: 250,
    maxRequests: 250,
    lastAccessDate: "2025-05-09"
  },
};
module.exports = apiKeys;
