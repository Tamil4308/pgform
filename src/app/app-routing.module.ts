import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { FacilitiesComponent } from './facilities/facilities/facilities.component';
import { TraffiComponent } from './traffi/traffi/traffi.component';
import { ContactModule } from './contact/contact.module';
import { RegistrationModule } from './registration/registration.module';
import { RformComponent } from './registration/rform/rform.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { RulesComponent } from './rules/rules/rules.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'traffi',component:TraffiComponent},
  {path:'contact',component:ContactusComponent},
  {path:'registration',component:RformComponent},
  {path:'rules',component:RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
