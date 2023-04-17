const router = require("express").Router();
const Transactions = require("../models/Transaction");


router.route("/create").post(async (req, res) => {    
    const {Transaction, Tick, Price} = req.body;
    const NewTransaction = await Transactions.create({Transaction, Tick, Price})
   
    console.log(NewTransaction)
   
    NewTransaction
    .save()
    .then(() => res.json("Transaction added!"))
    .catch((err) => res.status(400).json("Error: " + err));
    
   
});


router.route("/").get((req, res) => {
 Transactions.find()
 .then((transactions) => res.json(transactions))
 .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;