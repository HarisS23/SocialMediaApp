import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../assets/models/user';
import { UserService } from '../../../assets/services/user-service';
import { B } from '@angular/cdk/keycodes';
import { PostItem } from '../post/post-item';
import { PostsService } from '../posts-service';
import { DialogRef } from '@angular/cdk/dialog';

interface NewPostForm{
  username : FormControl<string>;
  title : FormControl<string>;
  body : FormControl<string>;
}

@Component({
  selector: 'app-add-new-post',
  standalone: false,
  templateUrl: './add-new-post.html',
  styleUrl: './add-new-post.scss'
})
export class AddNewPost implements OnInit {

  constructor(private userService : UserService, private postsService : PostsService) { }

  users : User[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data : any) => {
      this.users = data;
      console.log(this.users);
      },
      (error : any) => {
        alert(error.error);
      });
  }

  protected form = new FormGroup<NewPostForm>({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)]
    }),
    body: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    })
  })

  private dialogRef = inject(DialogRef, { optional : true});
  postAdded : boolean = false;

  submitNewPost() {
    let user = this.users.find(u => u.username === this.form.value.username);
    if (!user) {
      alert("Invalid username provided!");
      return;
    }
    let title = this.form.value.title;
    let body = this.form.value.body;
    let newPost = new PostItem(user.id, 101, title!, body!);
    this.postsService.addPost(newPost).subscribe((response : any) => {
      console.log(response)
    },
    (error : any) => {
      alert(error.error);
    });
      this.postAdded = true;
    setTimeout(() => {
      this.dialogRef?.close();
    }, 1000);
  }
}
