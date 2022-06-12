import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/schemas/auth.schema';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { UpdateAuthDto } from './dtos/update-auth.dto';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, @InjectModel(Auth.name) private AuthModel: Model<AuthDocument>) {}

    async validateUser(username: string, password: string): Promise<any> {
        const response = await this.findAll();
        let firstname = '';
        let lastname = '';
        const getUser = !!response.find(user =>
          user.username === username && user.password === password);
        response.find(user => {
          if (user.username === username && user.password === password) {
            firstname = user.firstname;
            lastname = user.lastname;            
          }
        })

        if (!getUser) {
          return null;
        }
        return { username: username, password: password, firstname: firstname, lastname: lastname };
      }

      async login(user: any) {
        user = await this.validateUser(user.username, user.password);
        const payload = { username: user.username, sub: user.userId, password: user.password, firstname: user.firstname, lastname: user.lastname };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    
      async findAll(): Promise<Auth[]> {
        return await this.AuthModel.find().exec();
      }
    
      async findOne(id: string): Promise<Auth> {
        return await this.AuthModel.findById(id).exec();
      }
    
      async create(createAuthDto: CreateAuthDto): Promise<Auth> {
        const createdAuth = new this.AuthModel(createAuthDto);
        return createdAuth.save();
      }
    
      async update(id: string, updateAuthDto: UpdateAuthDto): Promise<Auth> {
        return await this.AuthModel.findByIdAndUpdate(id, updateAuthDto).exec();
      }
    
      async delete(id: string): Promise<Auth> {
        return await this.AuthModel.findByIdAndDelete(id).exec();
      }

}
