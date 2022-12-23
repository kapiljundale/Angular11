import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignment',
  templateUrl: './data-binding-assignment.component.html',
  styleUrls: ['./data-binding-assignment.component.css']
})
export class DataBindingAssignmentComponent {

  UserName:string = "Advika";
  
  onClickUserName(){
    return this.UserName = " ";
  }
}
