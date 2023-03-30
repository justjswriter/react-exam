const { Schema } = require("mongoose");

const ReactProductsScheme = new Schema({
    product_name: String,
    sell_price: Number,
    buy_price: Number,
    product_amount: Number,
})

const ReactCashAmount = new Schema({
    cash_amount: Number
})

const ReactOperationScheme = new Schema({
    type: String,
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    product_amount: {
        type: Number,
        default: 0
    },
    product_summ:{
        type: Number,
        default: 0
    }

})

module.exports = {
    ReactOperationScheme,
    ReactProductsScheme,
    ReactCashAmount
};