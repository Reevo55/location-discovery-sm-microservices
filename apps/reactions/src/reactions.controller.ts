import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { Reaction } from './reactions.schema';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';

@Controller('reactions')
export class ReactionsController {
  constructor(private readonly reactionService: ReactionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a reaction' })
  @ApiCreatedResponse({ description: 'The reaction has been created.' })
  @ApiBody({ type: Reaction })
  async create(@Body() reaction: Reaction): Promise<Reaction> {
    return this.reactionService.create(reaction);
  }

  @Get(':postId')
  @ApiOperation({ summary: 'Get reactions by post ID' })
  @ApiOkResponse({ description: 'Reactions retrieved successfully.' })
  @ApiNotFoundResponse({ description: 'No reactions found for this post.' })
  @ApiParam({ name: 'postId', type: String })
  async findByPostId(@Param('postId') postId: string): Promise<Reaction[]> {
    return this.reactionService.findByPostId(postId);
  }

  @Delete(':reactionId')
  @ApiOperation({ summary: 'Delete a reaction by ID' })
  @ApiOkResponse({ description: 'Reaction deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Reaction not found.' })
  @ApiParam({ name: 'reactionId', type: String })
  async delete(@Param('reactionId') reactionId: string): Promise<Reaction> {
    return this.reactionService.delete(reactionId);
  }
}
