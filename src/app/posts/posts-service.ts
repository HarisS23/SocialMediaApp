import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostItem } from './post/post-item';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  getPosts() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(postId : number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getCommentsByPost(postId : number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  getUserById(userId : number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }

  addPost(post : PostItem){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  } 

}
