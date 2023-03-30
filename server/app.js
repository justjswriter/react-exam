const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter")
const cashRouter = require('./routers/cashAmount')
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"))

mongoose.connect('mongodb+srv://admin:admin@cluster0.8rc2y.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        console.log("server started");
        app.use("/products", productRouter);
        app.use("/cash", cashRouter);
        app.listen(8080);
    }
}); 
