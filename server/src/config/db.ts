import mongoose from "mongoose";

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017");

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;