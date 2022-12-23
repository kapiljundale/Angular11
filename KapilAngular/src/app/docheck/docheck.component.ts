import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.css']
})
export class DocheckComponent implements OnInit, OnChanges, DoCheck {
  
  ngDoCheck(): void {
    console.log("NgDOCheck Called");
    
  }
  
  @Input() ParentData:string;
  @Input() product:Product;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.ParentData);
    
    console.log("docheck component ngOnChanges called");
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
  }

}
