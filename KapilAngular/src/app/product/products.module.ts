import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';
import { CustdirectiveDirective } from '../custdirective.directive';


const prodRoutes: Routes =[
  {path:'product',component:ProductComponent,children:[
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'tv',component:TvComponent},
    {path:'washingMachine',component:WashingMachineComponent}
  ]}
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule { }
