import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Albums } from './albums';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Album } from './album/album';



@NgModule({
  declarations: [
    Albums,
    Album
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlbumsModule { }
