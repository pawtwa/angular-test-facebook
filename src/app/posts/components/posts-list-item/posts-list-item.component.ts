import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.changeDetector.detectChanges();
    }, 2000);
  }

  getAuthorLink() {
    console.log('getAuthorLink');
    // synchro: Model -> View
    return `/author/${this.post.author.id}`;
  }

  getPostLink() {
    return `/posts/${this.post.id}`;
  }
}
