import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/schemas/project.schema';
import { CreateProjectDto } from './dtos/create-project.dto';

@Injectable()
export class ProjectsService {

    constructor(
        @InjectModel(Project.name)
        private projectModel: Model<ProjectDocument>
    ) {}
    
    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        return new this.projectModel(createProjectDto).save();
    }

    async findOne(id: string): Promise<Project> {
        return await this.projectModel.findById(id).exec();
    }

    async findAll(): Promise<Project[]> {
        return await this.projectModel.find().exec();
    }

}
