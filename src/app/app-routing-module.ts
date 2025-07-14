import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Albums } from './albums/albums';

const routes: Routes = [
  { path: '', component: Posts },
  { path: 'albums', component: Albums }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
