import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './posts.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(post: Post): Promise<Post> {
    const newPost = new this.postModel(post);
    return newPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(postId: string): Promise<Post> {
    return this.postModel.findById(postId).exec();
  }

  async update(postId: string, post: Partial<Post>): Promise<Post> {
    return this.postModel.findByIdAndUpdate(postId, post, { new: true }).exec();
  }

  async delete(postId: string): Promise<Post> {
    return this.postModel.findByIdAndDelete(postId).exec();
  }
}
