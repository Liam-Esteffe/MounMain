import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TasksDocument } from 'src/schemas/tasks.schema';
import { CreateTasksDto } from './dtos/create-task.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task.name)
        private tasksModel: Model<TasksDocument>
    ) {}
    
    async create(createTasksDto: CreateTasksDto): Promise<Task> {
        return new this.tasksModel(createTasksDto).save();
    }

    async findOne(id: string): Promise<Task> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            return await this.tasksModel.findById(id).exec();
        }
    }

    async findAll(): Promise<Task[]> {
        return await this.tasksModel.find().exec();
    }
}
