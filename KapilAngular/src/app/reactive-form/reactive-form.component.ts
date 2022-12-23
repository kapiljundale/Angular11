import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm:FormGroup;

  genders=[
    {
      id:'1',
      value:'Male'
    },
    {
      id:'2',
      value:'Female' 
    }
  ]

  creatForm(){
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({'username':new FormControl('',Validators.required),
        'email':new FormControl('', [Validators.required,Validators.email])}),
      'course':new FormControl('ANgular'),
      'gender':new FormControl(''),
      'skills': new FormArray([
        new FormControl(null),
        new FormControl(null)
      ])
    })
  }

  onSubmit(){
  console.log(this.myReactiveForm);
  }

  constructor() { 
    this.creatForm();
  }

  ngOnInit() {
  }

}
