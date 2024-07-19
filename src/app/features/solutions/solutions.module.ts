import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';


@NgModule({
  imports: [
    CommonModule,
    SolutionsRoutingModule
  ],
  declarations: [
    SolutionsComponent
  ]
})
export class SolutionsModule { }
