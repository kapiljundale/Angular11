import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attridirective',
  templateUrl: './attridirective.component.html',
  styleUrls: ['./attridirective.component.css']
})
export class AttridirectiveComponent implements OnInit {
uname;
  colorVal = "red";

  people:any[] = [
    {
      "name": "Jack",
      "country": "UK"
    },
    {
      "name": "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "coidemind",
      "country": "UK"
    },
    {
      "name": "Surya",
      "country": "USA"
    }
  ]


  constructor() { }

  ngOnInit() {
  }
 show(value){
  this.uname = value;
 }
}
