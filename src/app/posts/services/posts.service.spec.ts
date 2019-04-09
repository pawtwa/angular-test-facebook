import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as Ajv from 'ajv';

import { environment } from './../../../environments/environment';
import { PostsService } from './posts.service';
import * as SCHEMA from './../../../docs/posts.schema.json';
import { Post } from '../interfaces/post.interface';

function fakePost(): Post {
  return {
    id: '',
    author: {
      id: '',
      name: '',
      avatar_url: ''
    },
    images: [],
    created_time: '',
    body: ''
  }
}

describe('PostsService', () => {
  let service: PostsService = null;
  let httpMock: HttpTestingController = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      PostsService
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(PostsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returns list of posts', () => {
    service.getPosts().subscribe({
      next: (response) => {
        expect(response.posts.length).toEqual(2);
      }
    });
    httpMock.expectOne(environment.posts_url).flush({
      posts: [1, 2]
    });
  });

  it('should returns response valid format (use schema)', () => {
    const ajv = new Ajv();
    const validator = ajv.compile(SCHEMA['default']);

    service.getPosts().subscribe({
      next: (response) => {
        const isValid = validator(response);
        expect(isValid).toBeTruthy();
        expect(validator.errors).toBeNull();
      }
    });
    httpMock.expectOne(environment.posts_url).flush({
      posts: Array.from({length: 5}).map(fakePost) // lub: Array(5).fill(null).map(fakePost)
    });
  })
});
