var mongoose = require("mongoose");
var productschema = mongoose.Schema({
   productName:String,
   productCat:String,
   productPrice:Number,
   prouctQuantity:Number
});
const productModel = mongoose.model("product",productschema);
 module .exports= productModel;