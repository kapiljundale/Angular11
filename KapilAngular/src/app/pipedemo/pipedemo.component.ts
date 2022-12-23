import { Component, OnInit } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  obser;
  price:number = 80000;
  todaysDate = new Date();

  obj ={id:'111',name:'Sachin'}
  
  constructor(private _demoService: DemoServiceService) { 
    this.obser = this._demoService.userName;
  }

  ngOnInit() {
  }

}
