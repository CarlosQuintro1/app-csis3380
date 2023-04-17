const router = require("express").Router();
let User = require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const createToken = (_id) =>{

    return jwt.sign({_id},"yrhjdskcjfheikslxcmjfdes", {expiresIn: '3d'})
    
}

router.route("/create").post(async (req, res) => {    
 const {FirstName, LastName, Age, UserName, Password} = req.body;
 const NewUser = await User.signup(FirstName, LastName, Age, UserName, Password);
 const token = createToken(NewUser._id)
 console.log({FirstName, LastName, Age, UserName, token})


 console.log(NewUser)

 NewUser
 .save()
 .then(() => res.json("User added!"))
 .catch((err) => res.status(400).json("Error: " + err));
 

});



router.route("/login").post(async (req, res) => {
    const {UserName, Password} = req.body
    const user = await User.login(UserName, Password)
    const token = createToken(user._id)
    const _id = user._id
    res.status(200).json({token, UserName, Password, _id})

});


// falta cambiar esto
router.route("/:id").post((req, res) => {
 User.findById(req.params.id)
 .then((user) => res.status(200).json(user))
 .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/delete/:id").delete((req, res) => {
User.findByIdAndDelete(req.params.id)
 .then(() => res.json("User deleted."))
 .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/update/:id").post(async (req, res) => {
 await User.findById(req.params.id).then((user) => {


 user.FirstName = req.body.FirstName;
 user.LastName = req.body.LastName;
 user.Age = req.body.Age;
 user.UserName = req.body.UserName;

 user.save()
 .then(() => res.json("user updated!"))
 .catch((err) => res.status(400).json("Error: " + err));
 })
 .catch((err) => res.status(400).json("Error: " + err));
});



module.exports = router;
