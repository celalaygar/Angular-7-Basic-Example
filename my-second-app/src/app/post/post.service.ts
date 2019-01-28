import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[];
  path = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }
  
  getPost( userid ): Observable<Post[]> {
    if (userid) {
      return this.http.get<Post[]>(this.path + 'posts?userId=' + userid);
    } else {
      return this.http.get<Post[]>(this.path + 'posts');
    }
  }

  // getPost( userid ) {
  //   if (userid) {
  //     this.http.get<Post[]>(this.path + 'posts?userId=' + userid).subscribe(
  //       response => {
  //         this.posts = response;
  //       }
  //     )
  //   } else {
  //     this.http.get<Post[]>(this.path + 'posts').subscribe(
  //       response => {
  //         this.posts = response;
  //     });
  //   }
  // }
}
