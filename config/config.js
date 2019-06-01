

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
// 
// PORT
// 
process.env.PORT = process.env.PORT || 3000;

process.env.URLDB = urlDB;