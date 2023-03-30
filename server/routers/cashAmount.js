const express = require("express");
const { ReactCashAmountModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactCashAmountModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
});

router.post("/", async (req, res) => {
    const { amount } = req.body;
    const newPost = new ReactCashAmountModel({ cash_amount: amount});
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("cash added");
        }
    });
});



router.get("/myCash", (req,res) => {
    const id = "641f4db8091580309f35ee9f"
    ReactCashAmountModel.find({_id: id}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
});

router.post("/myCash", async (req, res) => {
    const id = '641f4db8091580309f35ee9f'
    const { amount } = req.body;
    await ReactCashAmountModel.findByIdAndUpdate(id,{cash_amount: amount})
    res.send("cash added")
});

module.exports = router;