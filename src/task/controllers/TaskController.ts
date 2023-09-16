import { Response, Request } from "express";
import { validate } from 'class-validator';

import AddTaskDto from '../dto/AddTask.dto'


import { TaskService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class TaskController {

    static async add_task(req: Request, res: Response) {
        try {

            const signup_data = new AddTaskDto(req.body);
            const errors = await validate(signup_data);

            if (errors.length > 0) {
                return ResponseHelper.send_response(res,  422, errors);
            }

            const data: any = await TaskService.add_task(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

}
