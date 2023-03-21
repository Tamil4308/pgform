import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesComponent } from './facilities/facilities.component';



@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FacilitiesComponent
  ]
})
export class FacilitiesModule { }
