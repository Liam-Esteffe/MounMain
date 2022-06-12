import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { UpdateAuthDto } from './dtos/update-auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    // @POST Routes --
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
  
    @Get()
    async index() {
      return await this.authService.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.authService.findOne(id);
    }

    @Post('create')
    async create(@Body() createAuthDto: CreateAuthDto) {
      return await this.authService.create(createAuthDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
      return await this.authService.update(id, updateAuthDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.authService.delete(id);
    }
  
    @Post()
    postRegisterValue(@Body() body) {
      return body;
    }
    // @GET Routes --
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  
    // @DELETE Routes --
  
    @Delete()
    deleteUserLogin() {
      return 'Hello World';
    }
}
