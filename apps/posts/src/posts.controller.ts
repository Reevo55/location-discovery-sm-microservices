import {
  Controller,
  Get,
  Post as PostMapping,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './posts.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @PostMapping()
  async create(@Body() post: Post): Promise<Post> {
    return this.postService.create(post);
  }

  @Get()
  async findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get(':postId')
  async findOne(@Param('postId') postId: string): Promise<Post> {
    return this.postService.findOne(postId);
  }

  @Put(':postId')
  async update(
    @Param('postId') postId: string,
    @Body() post: Partial<Post>,
  ): Promise<Post> {
    return this.postService.update(postId, post);
  }

  @Delete(':postId')
  async delete(@Param('postId') postId: string): Promise<Post> {
    return this.postService.delete(postId);
  }
}
