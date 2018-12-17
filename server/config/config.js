// =============================
// PUERTO
// =============================

process.env.PORT = process.env.PORT || 3000;

// =============================
// ENTORNO
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Fecha de expiracion
// =============================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================
// SEED de autentificacion
// =============================
process.env.SEED = process.env.CADUCIDAD_TOKEN || 'este-es-el-seed-de-desarollo';

// =============================
// BASE DE DATOS
// =============================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =============================
// Google client ID
// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1028704292297-597vpj5hook4208iqg8i70go3ebdgpdh.apps.googleusercontent.com';