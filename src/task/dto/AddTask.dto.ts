import { IsNotEmpty, IsString, IsDateString, IsEnum, IsOptional} from "class-validator";
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

    @IsDateString()
        due_date: string;

    @IsOptional()
    @IsString()
        tag_name: string;

    @IsEnum(TaskStatus)
        status: string;


    constructor(data: Partial<LoginDto>) {
        Object.assign(this, data);
    }

}
