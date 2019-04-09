import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts = [0,1,2];

  constructor() { }

  ngOnInit() {
  }

  trackPost(index: number) {
    return index;
  }
}
