import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ description: 'Get users' })
  @Get('users')
  getUsers(): string {
    return 'users';
  }

  @ApiOkResponse({ description: 'Get user' })
  @Get('users/:id')
  getUser(@Param('id') id: string): string {
    return 'user ' + id;
  }

  @ApiOkResponse({ description: 'Create user' })
  @Post('users')
  createUser(): string {
    return 'create user';
  }

  @ApiOkResponse({ description: 'Update user' })
  @Put('users/:id')
  updateUser(@Param('id') id: string): string {
    return 'update user ' + id;
  }

  @ApiOkResponse({ description: 'Delete user' })
  @Delete('users/:id')
  deleteUser(@Param('id') id: string): string {
    return 'delete user ' + id;
  }

  @ApiOkResponse({ description: 'Get user posts' })
  @Get('users/:id/posts')
  getUserPosts(@Param('id') id: string): string {
    return 'user posts ' + id;
  }
}
