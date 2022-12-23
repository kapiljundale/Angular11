import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-templete-form',
  templateUrl: './simple-templete-form.component.html',
  styleUrls: ['./simple-templete-form.component.css']
})
export class SimpleTempleteFormComponent implements OnInit {

  defaultValue:string = "Male";
  genders =[
    {id:"1", value:"Male"},
    {id:"2", value:"Female"}
  ]

    constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    console.log(form);
    form.reset();
    form.controls["course"].setValue("Angular");
    form.controls["gender"].setValue("Male");
      }

  

}
