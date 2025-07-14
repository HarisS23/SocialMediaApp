import { Component, OnInit } from '@angular/core';
import { UserService } from '../../assets/services/user-service';
import { error } from 'console';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  
  userCount : number = 0;

  constructor(private userService : UserService) {}
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data : any) => {
      this.userCount = data.length
    },
    (error : any) => {
      alert(error.error)
    });
  }
}
