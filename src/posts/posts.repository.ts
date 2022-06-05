import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Post, PostDocument } from "./posts.schema";

@Injectable()
export class PostsRepository {
    constructor(@InjectModel(Post.name) private PostModel: Model<PostDocument>) {}

    async findOne(PostFilterQuery: FilterQuery<Post>): Promise<Post> {
        return this.PostModel.findOne(PostFilterQuery);
    }

    async find(PostsFilterQuery: FilterQuery<Post>): Promise<Post[]> {
        return this.PostModel.find(PostsFilterQuery)
    }

    async create(Post: Post): Promise<Post> {
        const newPost = new this.PostModel(Post);
        return newPost.save()
    }

    async findOneAndUpdate(PostFilterQuery: FilterQuery<Post>, Post: Partial<Post>): Promise<Post> {
        return this.PostModel.findOneAndUpdate(PostFilterQuery, Post, { new: true });
    }
}