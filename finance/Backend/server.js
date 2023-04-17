const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://charles:1234@cluster0.xd7xtnn.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/routes.backend')
const transRouter = require('./routes/routes.transaction')

app.use('/user/', userRouter)
app.use('/transaction/', transRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});