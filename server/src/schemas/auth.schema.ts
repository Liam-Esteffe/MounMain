import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
    @Prop({ required: true })
    firstname: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true })
    username: string;
    
    @Prop({ required: true })
    mail: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    _id: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);