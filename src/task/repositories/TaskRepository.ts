import models from "../../../database/mongo_db/models";


export class TaskRepository {


    static async add_task(task_data: string): Promise<any> {

        try {

            const new_comment = new models.Task(task_data);
            return await new_comment.save();

        } catch (e) {

            throw new Error(`error adding task ${e}`);

        }
    }

    static async add_tag(tag_data: object): Promise<any> {

        try {

            const new_comment = new models.Tag(tag_data);
            return await new_comment.save();

        } catch (e) {

            throw new Error(`error adding tag ${e}`);

        }
    }

    static async fetch_tag_by_id(id: string, user_id: string): Promise<any> {
        try {

            return await models.Tag.findOne({ id, user_id });

        } catch (e) {
            console.log("error fetching tag details", e);
        }

    }

    static async fetch_tag_by_name(name: string, user_id: string): Promise<any> {
        try {

            return await models.Tag.findOne({ name, user_id });

        } catch (e) {
            console.log("error fetching tag details", e);
        }

    }

    static async fetch_user_tasks(user_id: string): Promise<any> {
        try {
            return await models.Task.find({ user_id });
        } catch (e) {
            throw new Error(`error fetching tasks ${e}`);
        }

    }

    static async fetch_task(user_id: string, task_id: string): Promise<any> {
        try {
            return await models.Task.find({ user_id, _id: task_id });
        } catch (e) {
            throw new Error(`error fetching task ${e}`);
        }

    }

    static async update_task(user_id: string, task_id: string, data: object): Promise<any> {
        try {

            return await models.Task.updateOne(
                {user_id, _id: task_id },
                { $set: data },
                { new: true }
            );

        } catch (e) {
            throw new Error(`error Updating task ${e}`);
        }

    }

    static async delete_task(user_id: string, task_id: string): Promise<any> {
        try {

            return await models.Task.deleteOne(
                {user_id, _id: task_id }
            );

        } catch (e) {
            throw new Error(`error Deleting task ${e}`);
        }

    }


}
