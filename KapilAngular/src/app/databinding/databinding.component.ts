import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  name:string = "kapil";

  myname(){
    return this.name;
   }


  //  propert binding
 allowserver = false;
 imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201";
 constructor(){
  setTimeout(()=> {
    this.allowserver = true
  }, 5000);

 }


//EVENT binding
 serverStatus = "Server is Not Responding";
 onclickserver(){
  return this.serverStatus = "server Responding"
 }



}
