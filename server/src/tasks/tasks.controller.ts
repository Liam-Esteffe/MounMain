import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTasksDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get('all')
    async index() {
        return await this.taskService.findAll();
    }

    @Post('create')
    async createProject(@Body() createTaskDto: CreateTasksDto) {
        return await this.taskService.create(createTaskDto);
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.taskService.findOne(id);
    }


}
