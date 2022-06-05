import { Injectable } from "@nestjs/common";

import { Post } from "./posts.schema";
import { PostsRepository } from "./posts.repository";

@Injectable()
export class PostsService {
    constructor(private readonly postsRepository: PostsRepository) {}

    async getpostById(postId: string): Promise<Post> {
        return this.postsRepository.findOne({ postId })
    }

    async getposts(): Promise<Post[]> {
        return this.postsRepository.find({});
    }

  

   
}