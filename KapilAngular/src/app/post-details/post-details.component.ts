import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  arr:any[] = [];

  constructor(private _postservice: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this._postservice.getPostByID(id).subscribe(res=>{
      console.log(res);
      this.arr = res;
     })
  }

  displayStyle = "none"; 

  openPopup() { 
    this.displayStyle = "block"; 
  } 

  closePopup() { 
    this.displayStyle = "none"; 
  } 

}
