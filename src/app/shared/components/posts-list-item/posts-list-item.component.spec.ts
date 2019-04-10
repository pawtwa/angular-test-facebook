import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListItemComponent } from './posts-list-item.component';
import { Post } from 'src/app/shared/interfaces/post.interface';

describe('PostsListItemComponent', () => {
  let component: PostsListItemComponent;
  let fixture: ComponentFixture<PostsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListItemComponent);
    component = fixture.componentInstance;
    component.post = {
      id: '',
      created_time: (new Date()).toString(),
      body: '',
      author: {
        id: '',
        name: '',
        avatar_url: ''
      },
      images: [
        ''
      ]
    } as Post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
