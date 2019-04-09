import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostsModule { }
