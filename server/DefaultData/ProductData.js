

import Product from "../models/productModel.js";
import products from "../data/products.js";

const DefaultData = async()=>{
   try{
    await Product.deleteMany({});
    const Data = await Product.insertMany(products);
    console.log(Data);
   }catch(err){
    console.log(err);
   }
       
  
}

export default DefaultData;