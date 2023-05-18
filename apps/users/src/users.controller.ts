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
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @PostMapping()
  @ApiOperation({ summary: 'Create a user' })
  @ApiCreatedResponse({ description: 'The user has been created.' })
  @ApiBody({ type: User })
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'Users retrieved successfully.' })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiOkResponse({ description: 'User retrieved successfully.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @ApiParam({ name: 'userId', type: String })
  async findOne(@Param('userId') userId: string): Promise<User> {
    return this.userService.findOne(userId);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiOkResponse({ description: 'User updated successfully.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @ApiParam({ name: 'userId', type: String })
  @ApiBody({ type: User })
  async update(
    @Param('userId') userId: string,
    @Body() user: Partial<User>,
  ): Promise<User> {
    return this.userService.update(userId, user);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiOkResponse({ description: 'User deleted successfully.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @ApiParam({ name: 'userId', type: String })
  async delete(@Param('userId') userId: string): Promise<User> {
    return this.userService.delete(userId);
  }
}
