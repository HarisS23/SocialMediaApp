import { Component, inject, Input, OnInit } from '@angular/core';
import { PostItem } from './post/post-item';
import { PostsService } from './posts-service';
import { Dialog } from '@angular/cdk/dialog';
import { AddNewPost } from './add-new-post/add-new-post';
import { PostDetails } from './post-details/post-details';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.scss'
})
export class Posts implements OnInit {

  constructor(private postsService : PostsService) {}

  posts : PostItem[] = [];
  filteredPosts : PostItem[] = this.posts;

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data : any) => {
      this.posts = data;
      this.filteredPosts = this.posts;
      },
      (error : any) => {
        alert(error.message);
      }
    );
  }

  private dialog = inject(Dialog);

  protected openNewPostModal() {
    this.dialog.open(AddNewPost);
  }

  protected openPostDetailsModal(postItem : PostItem) {
    this.dialog.open(PostDetails, {data : {post: postItem}});
  }

  filterText = '';

  get textExistsClasses() {
    return {'linelablefill':this.filterText != ''}; 
  }

  filterPosts() : void {
    this.filteredPosts = this.posts.filter(post => 
      post.title.toLowerCase().includes(this.filterText.toLowerCase()) || 
      post.body.toLowerCase().includes(this.filterText.toLowerCase()));
  }
}
