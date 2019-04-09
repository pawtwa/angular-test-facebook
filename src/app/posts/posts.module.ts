import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListItemComponent } from './components/posts-list-item/posts-list-item.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostsListComponent, PostsListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostsListComponent
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
