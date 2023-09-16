import {ResponseObject} from '../../utils/ResponseObject';
import {TaskRepository} from "../repositories";


export class TaskService {
    static async add_task(req): Promise<object> {

        const response = new ResponseObject('Success', 200, {});


        try {

            const data = {
                ...req.body,
                user_id: "1"     //to be gotten from auth
            }

            response.data = await TaskRepository.add_task(data);

            return response;

        } catch (e) {
            console.log("An error while adding task", e);
            response.message = "An error while adding task";
            response.http_status = 500;
            return response;
        }

    }


}
