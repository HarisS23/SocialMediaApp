import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posts } from './posts';
import { Post } from './post/post';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AddNewPost } from './add-new-post/add-new-post';
import { PostDetails } from './post-details/post-details';



@NgModule({
  declarations: [
    Posts,
    Post,
    AddNewPost,
    PostDetails
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class PostsModule { }
