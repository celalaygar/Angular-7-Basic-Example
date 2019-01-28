import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyServiceService } from '../services/alertify-service.service'
import { PostService } from './post.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UserService]
})
export class PostComponent implements OnInit {

  today = new Date();
  path = 'https://jsonplaceholder.typicode.com/';
  posts: Post[];
  users: User[];
  filterText: string;

  selectedUser: User = null;
  getindex: number;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyServiceService,
    private postService: PostService,
    private userService: UserService) { }

  ngOnInit() {
    console.log(this.today);
    this.activatedRoute.params.subscribe(params => {
      this.getUsers(params['userid']);
      this.getPost(params['userid']);
    });
  }
  getPost(userid) {
    this.postService.getPost(userid).subscribe(data => {
      this.posts = data;
    });
  }
  getUsers(userid) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      if (userid) {
        this.getSingleUser(userid);
      }
    });
  }

  addToFavorites(post) {
    this.alertify.success('added to Favorite List : ' + post.title);
  }

  getSingleUser(userid) {
    this.getindex = userid - 1;
    this.selectedUser = this.users[this.getindex];
    console.log(this.selectedUser.id + ' : ' + this.selectedUser.username);
  }
}
