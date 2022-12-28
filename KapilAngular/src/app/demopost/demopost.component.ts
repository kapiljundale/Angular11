import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrpost:post[] = [];
  constructor( private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPost().subscribe(res=>{
      this.arrpost = res;
    })
    
  }

}
