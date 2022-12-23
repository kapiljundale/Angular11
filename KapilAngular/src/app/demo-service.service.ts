import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  userName = new BehaviorSubject('I am UI developer');

  products = [
    {name:'Laptop',id:'101'},
    {name:'Mobile',id:'102'},
    {name:'TV',id:'103'}
  ]
  
  constructor() {  }

  display(){
    alert('Subscribed Successfully');
  }


}
