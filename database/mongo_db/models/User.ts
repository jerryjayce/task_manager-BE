import mongoose, { Document, Schema } from "mongoose";

interface user extends Document {

    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;

}

// Define the User schema
const userSchema: Schema<user> = new Schema(
    {

        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }

    },
    {
        timestamps: true
    }
);

// Create and export the User model
const user = mongoose.model<user>("user", userSchema);

export default user;