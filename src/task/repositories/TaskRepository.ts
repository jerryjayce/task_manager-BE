import models from '../../../database/mongo_db/models';


export class TaskRepository {


    static async add_task(task_data: string): Promise<any> {

        try {

            const new_comment = new models.Task(task_data);
            return await new_comment.save();

        } catch (e) {

            throw new Error(`error posting comment ${e}`);

        }
    }




}
