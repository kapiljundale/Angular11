import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular By Kapil';
  uname = "I am from parent component";
  
  //@output decorator
  // foods: string[] = [];

  // getDataFromChild(value) {
  //   console.log(value);
  //   this.foods.push(value);
  // }

//  input  Assignment
  EmployeeRecord: any = [
    {
      empName:"Sachin",empCity:"MAngalwedha",empSalary:"20000"
    },
    {
      empName:"Sandip",empCity:"Pune",empSalary:"40000"
    },
    {
      empName:"rudra",empCity:"Sangola",empSalary:"100000"
    }
  ]

  //output Assignment
  // childReceviedData: any ="";
  // ReeciveData(event: any){
  //   console.log(event);
  //   this.childReceviedData = event;
  // }
  
//ngOnchange practical
public uid:any;

fruits:any[] = ["Mango","Banan","Orange","Apple"];

//docheck

data;
name:string;
price:number;
product:Product = new Product();

handleData(value): void{
  this.data = value.target.value;
}

updateDetails(){
  this.product = new Product();
  this.product.name =this.name;
  this.product.price =this.price;
}


}
