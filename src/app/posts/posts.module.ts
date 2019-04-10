import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class PostsModule { }
