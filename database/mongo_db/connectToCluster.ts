import { config } from "dotenv";
import mongoose from 'mongoose';


config();

export const connectToCluster = async () => {

    try {

        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: process.env.MONGO_DB_NAME,
        });

    } catch (error) {
        console.error("Connection to MongoDB Atlas failed!", error);
        process.exit();
    }
};


