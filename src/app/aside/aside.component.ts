import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  postList: IPost[] | null = null;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadPosts(5).subscribe(postList => {
      this.postList = postList;
    });
  }

}
