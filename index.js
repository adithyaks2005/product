

var express= require("express")
var app=express()

require('./db')
const productModel = require("./model/product");

var port= 6000

app.use(express.json());
app.post("/",(req,res)=>{
    try {
        productModel(req.body).save();
        res.send("data added successfully")
    } catch (error) {
        res.send(error);
        
    }
});

app.get('/',async(req,res)=>{
    var data = await productModel.find();
    res.send(data);try {
        
    } catch (error) {
     res.send(error);   
    }
});
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
  try {
    await productModel.findByIdAndDelete(req.params.id)
    res.send("Delete successfully!!")
  } catch (error) {
    res.send(error)
  }
})
// to update one data
app.put('/edit/:id',async(req,res)=>{
  try {
    var data =await productModel.findByIdAndUpdate(req.params.id,req.body);
    res.send("update successfully");

    
  } catch (error) {
    res.send(error);
  }
})
app.listen(port,(req,res)=>{
    console.log(`server is listening in port ${port}`);
});