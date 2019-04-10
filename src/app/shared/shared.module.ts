import { NgModule } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListItemComponent } from './components/posts-list-item/posts-list-item.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostsListComponent,
    PostsListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostsListComponent,
    PostsListItemComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
