import { BaseAuthDto } from './base-auth.dto';

export class UpdateAuthDto extends BaseAuthDto {
    firstname: string
    lastname: string
    username: string
    mail: string
    password: string
    _id: string
}