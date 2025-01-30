const mongoose = require("mongoose");
mongoose.connect
("mongodb+srv://adithya:adithya@cluster0.13fwz.mongodb.net/sampldb?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("connect to db")})
.catch((err)=>{console.log(err)})