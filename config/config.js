

// Envioroment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// BD

let urlDB;
//urlDB = 'mongodb://admin:admin123@ds263816.mlab.com:63816/sga2'
if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/sga2'
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
// 
// PORT
// 
process.env.PORT = process.env.PORT || 3000;

// SEED
process.env.SEED = process.env.SEED || "seed=secreto";

// CADUCIDAD
process.env.CADUCIDAD = process.env.CADUCIDAD || '30d';