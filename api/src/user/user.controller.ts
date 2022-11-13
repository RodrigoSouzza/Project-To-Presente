import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get()
    async list(): Promise<User[]>{
        return this.userService.listUsers()
    }



}