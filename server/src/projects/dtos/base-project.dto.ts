import { BaseTasksDto } from "src/tasks/dtos/base-tasks.dto";

export class BaseProjectDto {
    title: string;
    subtitle: string;
    date: Date;
    progress: number;
    deadline: Date;
    taskList: Array<BaseTasksDto>
}