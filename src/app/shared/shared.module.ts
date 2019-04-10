import { NgModule } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListItemComponent } from './components/posts-list-item/posts-list-item.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { CacheManagerService } from './services/cache-manager.service';

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
    CacheManagerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
