const express = require("express");
const { ReactProductsModel, ReactOperationModel, ReactCashAmountModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactProductsModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})


router.post("/", async (req, res) => {
    const { product_name, sell_price, buy_price } = req.body;
    const newPost = new ReactProductsModel({ product_name, sell_price, buy_price, product_amount: 0});
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Product Added");
        }
    });
})


router.put("/buy/:id", async (req, res) => {
    const id = req.params.id;
    const cashId = "641f4db8091580309f35ee9f"
    const {buyAmount, newBuyPice} = req.body;
    const updatedItem = await ReactProductsModel.findById(id)
    const updatedBank = await ReactCashAmountModel.findById(cashId)
    await ReactCashAmountModel.findByIdAndUpdate(cashId, {cash_amount: updatedBank.cash_amount - (buyAmount * newBuyPice)})
    await ReactProductsModel.findByIdAndUpdate(id,{product_amount: updatedItem.product_amount + buyAmount, buy_price: newBuyPice})
    const newBuyOperation = new ReactOperationModel({type: "buy", name: updatedItem.product_name, product_amount: buyAmount, product_summ: newBuyPice})
    newBuyOperation.save((err) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send("Product bought")
        }
    })
})


router.put("/sell/:id", async (req, res) => {
    const id = req.params.id;
    const cashId = "641f4db8091580309f35ee9f"
    const {sellAmount, newSellPice} = req.body;
    const updatedItem = await ReactProductsModel.findById(id)
    const updatedBank = await ReactCashAmountModel.findById(cashId)
    await ReactCashAmountModel.findByIdAndUpdate(cashId, {cash_amount: updatedBank.cash_amount + (sellAmount * newSellPice)})
    await ReactProductsModel.findByIdAndUpdate(id,{product_amount: updatedItem.product_amount - sellAmount, sell_price: newSellPice})
    const newBuyOperation = new ReactOperationModel({type: "sell", name: updatedItem.product_name, product_amount: sellAmount, product_summ: newSellPice})
    newBuyOperation.save((err) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send("Product sold")
        }
    })
})


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedItem = await ReactProductsModel.findById(id)
    const newOperation = new ReactOperationModel({type: "delete", name: deletedItem.product_name, product_amount: 0, product_summ: 0})
    newOperation.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            ReactProductsModel.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send("Product Deleted");
                }
            });
        }
    })
})

module.exports = router;