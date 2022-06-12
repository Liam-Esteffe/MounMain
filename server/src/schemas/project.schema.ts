import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
    @Prop({required: true})
    title : string;

    @Prop({required: true})
    subtitle: string;

    @Prop({required: true})
    date: Date;

    @Prop({required: true})
    progress: number;

    @Prop({required: true})
    deadline: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);