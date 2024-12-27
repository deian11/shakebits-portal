import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';
import { StoryService } from './news.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { NewsRoutingModule } from './news-routing.module';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    SharedModule,
    NewsRoutingModule,
    MatTableModule, 
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTabsModule
  ],
  providers: [
    StoryService
  ]
})
export class NewsModule { }
