import { Component, Input, OnInit } from '@angular/core';
import { AlbumItem } from '../../../assets/models/album-item';

@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.html',
  styleUrl: './album.scss'
})
export class Album implements OnInit {
  @Input() album! : AlbumItem;

  constructor() { }

  ngOnInit(): void {
    
  }
}
