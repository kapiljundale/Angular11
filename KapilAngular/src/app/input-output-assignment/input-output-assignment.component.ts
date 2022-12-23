import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-assignment',
  templateUrl: './input-output-assignment.component.html',
  styleUrls: ['./input-output-assignment.component.css']
})
export class InputOutputAssignmentComponent implements OnInit {

  
  @Input() employeedata:any;
  
  // Assignment on @output decorator
  MobileData: any = [
    {
      mobileCompany:"Samsung",mobileModel:"Samsung NOTE11",mobileCost:"20000"
    },
    {
      mobileCompany:"Nokia",mobileModel:"Nokia T120",mobileCost:"3000"
    },
    {
      mobileCompany:"MI",mobileModel:"MI note12",mobileCost:"100000"
    }
  ]

  @Output() allmobile: EventEmitter<any> = new EventEmitter();

  onClickButton(){
    this.allmobile.emit(this.MobileData)
  }

  constructor() { }

  ngOnInit() {
    console.log( this.employeedata);
    
  }

}
