import { ResponseObject } from "../../utils/ResponseObject";
import { TaskRepository } from "../repositories";


export class TaskService {
    static async add_task(req): Promise<object> {

        const response = new ResponseObject("Success", 200, {});


        try {

            const data = req.body;
            const user_id =  "1"        //req.headers.user.id
            data.user_id = user_id     //to be gotten from auth



            //if there's tag_id in request body, check if tag exist before saving task data
            if (data.tag_id && !data.tag_name){

                const tag = await TaskRepository.fetch_tag_by_id(data.tag_id, data.user_id);

                if (!tag) {
                    response.message = "Invalid tag_id supplied";
                    response.http_status = 401;
                    return response;
                }

                data.tag_id = tag.id;
            }



            //if there's tag_name in body, create new tag and save tag_id to task collection
            if (data.tag_name){

                const tag = await TaskRepository.fetch_tag_by_name(data.tag_name, user_id);

                if (!tag) {

                    const new_tag_id = Date.now();

                    const tag_data = {
                        id: new_tag_id,
                        user_id,
                        name: data.tag_name
                    }

                    await TaskRepository.add_tag(tag_data);
                    data.tag_id = new_tag_id;

                }else {

                    data.tag_id = tag.id;

                }

            }


            if (!data.tag_id && !data.tag_name){
                data.tag_id = null;
            }


            response.data = await TaskRepository.add_task(data);

            return response;

        } catch (e) {
            console.log("An error while adding task", e);
            response.message = "An error occurred while adding task";
            response.http_status = 500;
            return response;
        }

    }


}
