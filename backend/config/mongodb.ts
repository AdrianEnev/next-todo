import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING;

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_CONNECTION_STRING is not defined in environment variables");
}

const connectDB = async () => {
    if (mongoose.connection.readyState !== 0) {
        // Already connected or connecting
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB connected");
    } catch (err: any) {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    }
};

export default connectDB;
