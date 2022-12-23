import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() myinput:string;
  constructor() { }

  ngOnInit() {
    console.log(this.myinput);
    
  }
  
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
			
			addtofood(value) {
// foodevent is nothing but your custom event (foodevent)
    this.foodevent.emit(value);
  }

}
      