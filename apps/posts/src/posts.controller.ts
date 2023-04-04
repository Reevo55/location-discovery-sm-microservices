import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOkResponse({ description: 'Get posts' })
  @Get('')
  getPosts(): string {
    return 'posts';
  }

  @ApiOkResponse({ description: 'Get post' })
  @Get(':id')
  getPost(@Param('id') id: string): string {
    return 'post ' + id;
  }

  @ApiOkResponse({ description: 'Create post' })
  @Post('')
  createPost(): string {
    return 'create post';
  }

  @ApiOkResponse({ description: 'Update post' })
  @Put(':id')
  updatePost(@Param('id') id: string): string {
    return 'update post ' + id;
  }

  @ApiOkResponse({ description: 'Delete post' })
  @Delete(':id')
  deletePost(@Param('id') id: string): string {
    return 'delete post ' + id;
  }
}
