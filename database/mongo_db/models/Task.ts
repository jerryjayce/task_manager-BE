import mongoose, { Document, Schema } from "mongoose";

interface task extends Document {

    user_id: string;
    tittle: string;
    description: string;
    tag_id: string;
    due_date: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;

}


const taskSchema: Schema<task> = new Schema(
    {

        user_id: {
            type: String,
            required: true
        },
        tittle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        tag_id: {
            type: String
        },
        status: {
            type: String,
            enum: ["to-do", "in-progress", "completed"], // Define the allowed values
            default: "to-do" // Set a default value (optional)
        },
        due_date: {
            type: Date
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

const task = mongoose.model<task>("task", taskSchema);

export default task;