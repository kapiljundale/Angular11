import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges  {

  @Input() userId:any;

  constructor() {
    console.log("Hooks component constructor called");
     }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("Hooks component ngOnChanges called");
      for (const propName in changes) {
             const prop = changes[propName];
             const {previousValue,currentValue,firstChange} = prop;
             console.log(`Prop name ${propName}`);
             console.log(`Prop previous Value ${previousValue}`);
             console.log(`Prop current Value ${currentValue}`);
             console.log(`Prop first Change ${firstChange}`);
             console.log("--------------------------");
             
            
        }
        
      }

    ngOnInit(): void {
    console.log("Hooks component ngOnInit called");
    
    }

   
  }


