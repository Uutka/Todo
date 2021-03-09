import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { UserDto } from './dto/response/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }
}
