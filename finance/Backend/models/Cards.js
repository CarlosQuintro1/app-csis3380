const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const cardSchema = new Schema({
    UserID: {type: Schema.Types.ObjectId, ref : 'UserModel'},
    CardNumber: {type: String, required: true},
    Holder:{type: String, required: true },
    Type: { type: String, required: true },
    Date: { type: String, required: true },
    CCV: { type: Number, required: true },

});

// This Activitry creates the collection called activitimodels
const CardModel = mongoose.model("CardModel", cardSchema);
module.exports = CardModel;