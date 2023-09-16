import { Response, Request } from "express";
import { validate } from 'class-validator';
import { class_validator_error_formatter } from '../../utils/ClassValidatorErrorFormatter'

import AddTaskDto from '../dto/AddTask.dto'


import { TaskService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class TaskController {

    static async add_task(req: Request, res: Response) {
        try {

            const task_data = new AddTaskDto(req.body);
            const errors = await validate(task_data);

            if (errors.length > 0) {
                const formatted_error =  class_validator_error_formatter(errors);
                return ResponseHelper.send_response(res,  422, formatted_error);
            }

            const data: any = await TaskService.add_task(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

}
