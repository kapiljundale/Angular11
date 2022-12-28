import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustdirectiveDirective } from '../custdirective.directive';


@NgModule({
  declarations: [
    CustdirectiveDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustdirectiveDirective
  ]
})
export class UtilityModule { }
