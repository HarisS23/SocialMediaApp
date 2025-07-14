import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums-service';
import { AlbumItem } from '../../assets/models/album-item';
import { Photo } from '../../assets/models/photo';

@Component({
  selector: 'app-albums',
  standalone: false,
  templateUrl: './albums.html',
  styleUrl: './albums.scss'
})
export class Albums implements OnInit{

  albums : AlbumItem[] = [];
  images : Photo[] = [];

  constructor(private albumsService : AlbumsService) {}

  filteredAlbums : AlbumItem[] = [];
  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data : any) => {
      this.albums = data;
      this.filteredAlbums = this.albums;
    },
    (error : any) => {
      alert(error.error);
    });
  }
  
  filterText = '';

  filterAlbums(){
    this.filteredAlbums = this.albums.filter(album => 
      album.title.toLowerCase().includes(this.filterText.toLowerCase()));
  }
}
