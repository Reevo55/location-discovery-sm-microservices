// reaction.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reaction, ReactionDocument } from './reactions.schema';

@Injectable()
export class ReactionsService {
  constructor(
    @InjectModel(Reaction.name) private reactionModel: Model<ReactionDocument>,
  ) {}

  async create(reaction: Reaction): Promise<Reaction> {
    const newReaction = new this.reactionModel(reaction);
    return newReaction.save();
  }

  async findByPostId(postId: string): Promise<Reaction[]> {
    return this.reactionModel.find({ postId }).exec();
  }

  async delete(reactionId: string): Promise<Reaction> {
    return this.reactionModel.findByIdAndDelete(reactionId).exec();
  }
}
