import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { demoComponent } from './demo/demo.component';
import { AddComponent } from './add/add.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectiveComponent } from './demodirective/demodirective.component';
import { AttridirectiveComponent } from './attridirective/attridirective.component';
import { CustdirectiveDirective } from './custdirective.directive';
import { InputOutputAssignmentComponent } from './input-output-assignment/input-output-assignment.component';
import { UseInputOutputComponent } from './use-input-output/use-input-output.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirAssignmentComponent } from './dir-assignment/dir-assignment.component';
import { DocheckComponent } from './docheck/docheck.component';
import { SampleComponent } from './sample/sample.component';
import { HooksRemainComponent } from './hooks-remain/hooks-remain.component';
import { SimpleTempleteFormComponent } from './simple-templete-form/simple-templete-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { PipeAssignmentComponent } from './pipe-assignment/pipe-assignment.component';
import { PipeassPipe } from './pipeass.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
//import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { LoginComponent } from './login/login.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ProductsModule } from './product/products.module';
import { CodeModule } from './codemind/code.module';
import { OrdersModule } from './orders/orders.module';
import { AdduserComponent } from './adduser/adduser.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RapidApiComponent } from './rapid-api/rapid-api.component';
//import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
//import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
//import { Http}


@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    AddComponent,
    WarningAlertComponent,
    DataBindingAssignmentComponent,
    DemodirectiveComponent,
    AttridirectiveComponent,
    //CustdirectiveDirective,
    InputOutputAssignmentComponent,
    UseInputOutputComponent,
    HooksComponent,
    DirAssignmentComponent,
    DocheckComponent,
    SampleComponent,
    HooksRemainComponent,
    SimpleTempleteFormComponent,
    ReactiveFormComponent,
    PipedemoComponent,
    CountPipe,
    FilterpipeComponent,
    FilterPipe,
    PipeAssignmentComponent,
    PipeassPipe,
    AboutUsComponent,
    ContactComponent,
    //ProductComponent,
    HomeComponent,
    PagenotFoundComponent,
    LoginComponent,
    DemopostComponent,
    PostDetailsComponent,
    AdduserComponent,
    FirebaseComponent,
    RapidApiComponent,
     // Servicecomp1Component,
    //Servicecomp2Component,
    
        ],
  imports: [
    //ProductsModule, removed due to lazy loading
    BrowserModule,
    CodeModule,
    //OrdersModule, removed due to lazy loading
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  
  constructor(){
  console.log('App Module Called');
}
}
