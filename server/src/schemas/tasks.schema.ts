import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TasksDocument = Task & Document;

@Schema()
export class Task {
    @Prop({required: true})
    title : string;

    @Prop({required: true})
    subtitle: string;

    @Prop({required: true})
    property: 'Frontend' | 'Backend' | 'Testing' | 'UIUX' | 'Data Analysis' | 'Web Designing';

    @Prop({required: true})
    progress: number;

    @Prop({required: true})
    deadline: Date;
}

export const TasksSchema = SchemaFactory.createForClass(Task);