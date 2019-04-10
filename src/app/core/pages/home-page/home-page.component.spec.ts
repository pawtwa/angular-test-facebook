import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomePageComponent } from './home-page.component';
// import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsListComponent } from 'src/app/shared/components/posts-list/posts-list.component';
import { PostsListItemComponent } from 'src/app/shared/components/posts-list-item/posts-list-item.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        PostsListComponent,
        PostsListItemComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        // PostsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
