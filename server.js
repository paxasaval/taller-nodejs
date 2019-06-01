require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(require('./routes/index'));
app.use(bodyParser.json());

// DB config
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true
}, (err, res) => {
    if (err) throw error;
    console.log(`Mongo is working ${process.env.PORT}`);
});

// Port 
app.listen(process.env.PORT, () => {
    // console.log("NODEJS LISTENING ", process.env.PORT);    
    console.log("NODEJS WORKING");
});