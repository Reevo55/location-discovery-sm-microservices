import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(userId: string): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async update(userId: string, user: Partial<User>): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, user, { new: true }).exec();
  }

  async delete(userId: string): Promise<User> {
    return this.userModel.findByIdAndDelete(userId).exec();
  }
}
