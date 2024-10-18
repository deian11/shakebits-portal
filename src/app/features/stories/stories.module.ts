import { NgModule } from '@angular/core';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';
import { StoryService } from './stories.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    SharedModule,
    StoriesRoutingModule,
    MatTableModule, 
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [
    StoryService
  ]
})
export class StoriesModule { }
