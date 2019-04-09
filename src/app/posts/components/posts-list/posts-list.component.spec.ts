import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { Posts } from '../../interfaces/posts.interface';
import { PostsListItemComponent } from '../posts-list-item/posts-list-item.component';
import { PostsService } from '../../services/posts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListComponent, PostsListItemComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [PostsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    component.posts = [] as Posts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
