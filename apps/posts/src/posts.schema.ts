import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  mediaUrl: string;

  @Prop({ required: true, enum: ['image', 'video'] })
  mediaType: string;

  @Prop()
  content: string;

  @Prop({ required: true })
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  comments: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
