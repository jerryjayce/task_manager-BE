import { IsNotEmpty, IsString, isDateString, IsEnum} from "class-validator";
enum TaskStatus {
    TODO = 'to-do',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed',
}

export default class LoginDto {

    @IsString()
    @IsNotEmpty()
        tittle: string;

    @IsString()
    @IsNotEmpty()
        description: string;


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    @isDateString()
        due_date: string;

    @IsEnum(TaskStatus)
        status: string;


    constructor(data: Partial<LoginDto>) {
        Object.assign(this, data);
    }

}
