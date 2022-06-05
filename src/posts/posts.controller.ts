import {  Controller, Get, Param} from '@nestjs/common';
import { Post } from './posts.schema';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':postId')
  async getPost(@Param('postId') PostId: string): Promise<Post> {
      console.log("getpost Id");
    return this.postsService.getpostById(PostId);

  }

  @Get()
  async getPosts(): Promise<Post[]> {
    console.log("all get posts Id");
      return this.postsService.getposts();
  }



}