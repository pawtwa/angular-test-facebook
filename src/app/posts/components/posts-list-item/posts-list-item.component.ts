import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss']
})
export class PostsListItemComponent implements OnInit {

  post = {
    time: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

}
