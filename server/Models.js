const mongoose = require("mongoose");
const {ReactOperationScheme, ReactProductsScheme,ReactCashAmount } = require("./Schemas");

const ReactOperationModel = mongoose.model("ReactOperation", ReactOperationScheme);
const ReactProductsModel = mongoose.model("ReactProducts", ReactProductsScheme);
const ReactCashAmountModel = mongoose.model("reactCashAmount", ReactCashAmount)

module.exports = {
    ReactOperationModel,
    ReactProductsModel,
    ReactCashAmountModel
};