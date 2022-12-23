import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-assignment',
  templateUrl: './pipe-assignment.component.html',
  styleUrls: ['./pipe-assignment.component.css']
})
export class PipeAssignmentComponent implements OnInit {

  empData:any[] =[
    {id:"101",name:"kartik",gender:"Male",DOB:"12/12/1990"},
    {id:"102",name:"priya",gender:"female",DOB:"18/1/2000"},
    {id:"103",name:"Sachin",gender:"Male",DOB:"12/08/1995"},
    {id:"104",name:"poonam",gender:"female",DOB:"10/06/2002"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
