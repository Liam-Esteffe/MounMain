import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {

    constructor(private readonly projectService: ProjectsService) {}

    @Get('all')
    async index() {
        return await this.projectService.findAll();
    }

    @Post('create')
    async createProject(@Body() createProjectDto: CreateProjectDto) {
        var length = (await this.projectService.findAll()).length
        return await this.projectService.create(createProjectDto);
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.projectService.findOne(id);
    }


}
