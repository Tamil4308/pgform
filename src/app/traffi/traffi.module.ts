import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraffiComponent } from './traffi/traffi.component';



@NgModule({
  declarations: [
    TraffiComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TraffiComponent
  ]
})
export class TraffiModule { }
