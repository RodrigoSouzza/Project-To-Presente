import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResultDto } from 'src/dtoGeneric/result.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
 
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get()
    async list(): Promise<User[]>{
        return this.userService.listUsers()
    }
 
    @Post('register')
    async register(@Body() data: UserRegisterDto): Promise<ResultDto>{
      return this.userService.register(data)
    }

    @UseGuards(AuthGuard('local'))
      @Post('login')
      async login(@Request() req) {
        return req.user;
      }
}