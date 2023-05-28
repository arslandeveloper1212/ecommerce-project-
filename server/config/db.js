import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://johnsmithdev086:admin123@cluster0.fbjp1ta.mongodb.net/", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
     
    });
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
