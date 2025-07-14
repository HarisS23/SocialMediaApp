import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http : HttpClient) { }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbumById(albumId : number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
  }

  getPhotosByAlbum(albumId : number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }
}
