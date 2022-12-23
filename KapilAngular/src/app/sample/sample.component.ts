import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  listArr = [];
  inputTxt = '';

  addToList(){
    if(this.inputTxt != ''){
      this.listArr.push(this.inputTxt);
    }
  }
  removeItem(index : number){
    this.listArr.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
