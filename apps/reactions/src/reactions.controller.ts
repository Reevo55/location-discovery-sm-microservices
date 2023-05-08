import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { Reaction } from './reactions.schema';

@Controller('reactions')
export class ReactionController {
  constructor(private readonly reactionService: ReactionsService) {}

  @Post()
  async create(@Body() reaction: Reaction): Promise<Reaction> {
    return this.reactionService.create(reaction);
  }

  @Get(':postId')
  async findByPostId(@Param('postId') postId: string): Promise<Reaction[]> {
    return this.reactionService.findByPostId(postId);
  }

  @Delete(':reactionId')
  async delete(@Param('reactionId') reactionId: string): Promise<Reaction> {
    return this.reactionService.delete(reactionId);
  }
}
