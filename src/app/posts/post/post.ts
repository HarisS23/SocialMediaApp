import { Component, Input, OnInit } from '@angular/core';
import { PostItem } from './post-item';
import { PostsService } from '../posts-service';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post implements OnInit {
  @Input() post! : PostItem;

  constructor(private postsService : PostsService) { }
  
  title : string = '';
  body : string = '';
  user : string = '';

  ngOnInit(): void {
    this.postsService.getUserById(this.post.userId).subscribe((data : any) => {
      this.user = data.username
    },
    (error : any) => {
      alert(error.error);
    }
    );
  }
}
