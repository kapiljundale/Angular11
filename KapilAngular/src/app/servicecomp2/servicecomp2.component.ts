import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {

  constructor(private _demoService:DemoServiceService) { }

  ngOnInit() {
  }
  onSubscribe(){
     this._demoService.display();
  }
}
