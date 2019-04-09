import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListItemComponent } from './components/posts-list-item/posts-list-item.component';

@NgModule({
  declarations: [PostsListComponent, PostsListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostsModule { }
