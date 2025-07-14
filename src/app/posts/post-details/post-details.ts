import { Component, Inject, inject, OnInit } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { PostsService } from '../posts-service';
import { PostItem } from '../post/post-item';
import { User } from '../../../assets/models/user';

@Component({
  selector: 'app-post-details',
  standalone: false,
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss'
})
export class PostDetails implements OnInit {

  post : PostItem;
  comments : any;
  username : string = '';

  constructor(private postsService : PostsService, @Inject(DIALOG_DATA) public data : {post : PostItem}) {
    this.post = data.post;
   }

  ngOnInit(): void {
    this.postsService.getCommentsByPost(this.post.id).subscribe((data : any) => {
      this.comments = data;
    },
    (error : any) => {
      alert(error.error);
    });
    this.postsService.getUserById(this.post.userId).subscribe((data : any) => {
      this.username = data.username
    }),
    (error : any) => {
      alert(error.error);
    }
  }
}
