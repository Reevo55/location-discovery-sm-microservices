import {
  Controller,
  Get,
  Post as PostMapping,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

import { PostsService } from './posts.service';
import { Post } from './posts.schema';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @PostMapping()
  @ApiOperation({ summary: 'Create a post' })
  @ApiCreatedResponse({ description: 'The post has been created.' })
  @ApiBody({ type: Post })
  async create(@Body() post: Post): Promise<Post> {
    return this.postService.create(post);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiOkResponse({ description: 'Posts retrieved successfully.' })
  async findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get(':postId')
  @ApiOperation({ summary: 'Get post by ID' })
  @ApiOkResponse({ description: 'Post retrieved successfully.' })
  @ApiNotFoundResponse({ description: 'Post not found.' })
  @ApiParam({ name: 'postId', type: String })
  async findOne(@Param('postId') postId: string): Promise<Post> {
    return this.postService.findOne(postId);
  }

  @Put(':postId')
  @ApiOperation({ summary: 'Update post by ID' })
  @ApiOkResponse({ description: 'Post updated successfully.' })
  @ApiNotFoundResponse({ description: 'Post not found.' })
  @ApiParam({ name: 'postId', type: String })
  @ApiBody({ type: Post })
  async update(
    @Param('postId') postId: string,
    @Body() post: Partial<Post>,
  ): Promise<Post> {
    return this.postService.update(postId, post);
  }

  @Delete(':postId')
  @ApiOperation({ summary: 'Delete post by ID' })
  @ApiOkResponse({ description: 'Post deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Post not found.' })
  @ApiParam({ name: 'postId', type: String })
  async delete(@Param('postId') postId: string): Promise<Post> {
    return this.postService.delete(postId);
  }
}
