const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const userSchema = new Schema({
  FirstName: { type: String},
  LastName: { type: String},
  Age: {type: Number},
  UserName: {type: String, required: true, unique: true},
  Password: {type: String, required: true}

});

userSchema.statics.signup = async function (FirstName, LastName, Age, UserName, Password) {
  const exists = await this.findOne({UserName})
    //Validation
    if(exists){
      throw Error("Username already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(Password, salt)

    const user = await this.create({FirstName, LastName, Age, UserName, Password: hash})

    return user;
  
}

//STATIC LOGIN METHOD
userSchema.statics.login = async function(UserName, Password){
  if(!UserName || !Password){
    throw Error("ALL FIELDS MUST BE FILLED!")
  }

  const user = await this.findOne({UserName})
    //Validation
    if(!user){
      throw Error("Username not valid")
    }

  const IsMatch = await bcrypt.compare(Password, user.Password)

  if(!IsMatch){
    throw Error("Wrong Password!")
  }

  return user
}

// This Activitry creates the collection called activitimodels
const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;