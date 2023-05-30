import { RmqService } from '@app/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { PostsService } from './posts.service';
import { Controller } from '@nestjs/common';

@Controller()
export default class PostEventsHandler {
  constructor(
    private readonly postService: PostsService,
    private readonly rmqService: RmqService,
  ) {}

  @MessagePattern('post.reaction.created')
  async handleReactionCreated(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    console.log('post.reaction.created');
    console.log(data);
    await this.postService.incrementLikes(data.postId);
    this.rmqService.ack(context);
  }

  @MessagePattern('post.reaction.deleted')
  async handleReactionDeleted(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    console.log('post.reaction.deleted');
    console.log(data);
    await this.postService.decrementLikes(data.postId);
    this.rmqService.ack(context);
  }
}
