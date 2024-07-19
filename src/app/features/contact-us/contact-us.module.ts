import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '@shared/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';


@NgModule({
  imports: [
    SharedModule,
    ContactUsRoutingModule
  ],
  declarations: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
