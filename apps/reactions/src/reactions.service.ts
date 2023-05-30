// reaction.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reaction, ReactionDocument } from './reactions.schema';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReactionsService {
  constructor(
    @InjectModel(Reaction.name) private reactionModel: Model<ReactionDocument>,
    @Inject('POST') private postService: ClientProxy,
  ) {}

  async create(reaction: Reaction): Promise<Reaction> {
    const newReaction = new this.reactionModel(reaction);
    this.postService.emit('post.reaction.created', newReaction);
    console.log('post.reaction.created', newReaction);
    return newReaction.save();
  }

  async findByPostId(postId: string): Promise<Reaction[]> {
    return this.reactionModel.find({ postId }).exec();
  }

  async delete(reactionId: string): Promise<Reaction> {
    const reaction = await this.reactionModel.findById(reactionId).exec();
    this.postService.emit('post.reaction.deleted', reaction.postId);
    console.log('post.reaction.delete', reaction.postId);

    return this.reactionModel.findByIdAndDelete(reactionId).exec();
  }
}
