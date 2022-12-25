import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  // {path:'',redirectTo:'login',pathMatch:'full'},
	// {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
