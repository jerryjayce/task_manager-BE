import mongoose, { Document, Schema } from "mongoose";

interface tag extends Document {

    id: string;
    user_id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;

}


const tagSchema: Schema<tag> = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
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

const tag = mongoose.model<tag>("tag", tagSchema);

export default tag;