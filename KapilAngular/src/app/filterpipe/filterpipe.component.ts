import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {

  namesearch:string = '';
  productArr:any[]=[
    {srNo:1,name:'Mobile',price:'7000 RS',Availability:'Available'},
    {srNo:2,name:'TV',price:'8000 RS',Availability:'Not Available'},
    {srNo:3,name:'Washing Machine',price:'9000 RS',Availability:'Available'},
    {srNo:1,name:'Tab',price:'17000 RS',Availability:'Not Available'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
