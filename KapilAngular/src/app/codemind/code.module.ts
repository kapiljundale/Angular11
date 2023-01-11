import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { CodemindComponent } from './codemind.component';
import { JavaComponent } from './java/java.component';
import { TestingComponent } from './testing/testing.component';
import { RouterModule, Routes } from '@angular/router';
import { DevopsComponent } from './devops/devops.component';

const codeRoute: Routes = [
  {path:'codemind',component:CodemindComponent,children:[
    {path:'angular',component:AngularComponent},
    {path:'java',component:JavaComponent},
    {path:'testing',component:TestingComponent},
    {path:'devops',component:DevopsComponent}
  ]}
]

@NgModule({
  declarations: [
    AngularComponent,
    CodemindComponent,
    JavaComponent,
    TestingComponent,
    DevopsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(codeRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class CodeModule { }
