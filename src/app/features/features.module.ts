import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    SharedModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }

