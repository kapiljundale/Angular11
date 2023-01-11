import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { demoComponent } from './demo/demo.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { PipeAssignmentComponent } from './pipe-assignment/pipe-assignment.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
	{path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'post',component:DemopostComponent},
  {path:'postDetails/:id',component:PostDetailsComponent},
  {path:'pipe',component:PipeAssignmentComponent},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'product',canActivate:[AuthGuard],  loadChildren:'./product/products.module#ProductsModule'},
  {path:'**',component:PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('App Routing Module Works');
 }
}