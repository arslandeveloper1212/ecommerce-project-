
import User from "../models/userModel.js";
import users from "../data/users.js";

const DefaultData = async()=>{
   try{
    await User.deleteMany({});
    const Data = await User.insertMany(users);
    console.log(Data);
   }catch(err){
    console.log(err);
   }
       
  
}

export default DefaultData;