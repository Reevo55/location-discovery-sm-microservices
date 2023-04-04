import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('reactions')
@Controller('reactions')
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @ApiOkResponse({ description: 'Get post comments' })
  @Get(':id/comments')
  getPostComments(@Param('id') id: string): string {
    return 'post comments ' + id;
  }

  @ApiOkResponse({ description: 'Create post comment' })
  @Post(':id/comments')
  createPostComment(@Param('id') id: string): string {
    return 'create post comment ' + id;
  }

  @ApiOkResponse({ description: 'Update post comment' })
  @Put(':id/comments/:commentId')
  updatePostComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
  ): string {
    return 'update post comment ' + id + ' ' + commentId;
  }

  @ApiOkResponse({ description: 'Delete post comment' })
  @Delete(':id/comments/:commentId')
  deletePostComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
  ): string {
    return 'delete post comment ' + id + ' ' + commentId;
  }

  @ApiOkResponse({ description: 'Get post likes' })
  @Get(':id/likes')
  getPostLikes(@Param('id') id: string): string {
    return 'post likes ' + id;
  }

  @ApiOkResponse({ description: 'Create post like' })
  @Post(':id/likes')
  createPostLike(@Param('id') id: string): string {
    return 'create post like ' + id;
  }

  @ApiOkResponse({ description: 'Delete post like' })
  @Delete(':id/likes')
  deletePostLike(@Param('id') id: string): string {
    return 'delete post like ' + id;
  }
}
