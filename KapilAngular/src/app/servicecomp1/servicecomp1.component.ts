import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {

  productss ={}
  constructor(private _demoService:DemoServiceService) { }

  onSubscribe(){
    this._demoService.display();
  }

  ngOnInit() {
    this.productss = this._demoService.products;
  }

  

}
