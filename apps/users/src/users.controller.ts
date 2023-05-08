import {
  Controller,
  Get,
  Post as PostMapping,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @PostMapping()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<User> {
    return this.userService.findOne(userId);
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() user: Partial<User>,
  ): Promise<User> {
    return this.userService.update(userId, user);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string): Promise<User> {
    return this.userService.delete(userId);
  }
}
