const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;



// Create a Schema object
const transactionSchema = new Schema({
    Transaction: { type: String, required: true },
    Tick: { type: String, required: true },
    Price: { type: String, required: true },

});

// This Activitry creates the collection called activitimodels
const TransactionModel = mongoose.model("TransactionModel", transactionSchema);
module.exports = TransactionModel;