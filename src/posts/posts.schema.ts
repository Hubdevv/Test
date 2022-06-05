import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document

@Schema()
export class Post {
    @Prop()
    userId: String;

    @Prop()
    id: String;

    @Prop()
    title: String;

    @Prop()
    body: String;
  
    
}
export const PostSchema= SchemaFactory.createForClass(Post);