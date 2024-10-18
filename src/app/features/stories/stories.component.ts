import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StoryItem } from './stories.model';
import { StoryService } from './stories.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  _storyService = inject(StoryService);

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  topStories = false;
  displayedColumns: string[] = ['title'];
  dataSource = new MatTableDataSource<StoryItem>([]);
  pageEvent: PageEvent = new PageEvent;
  filter: string = "";

  ngOnInit() {
    this.get_data();
    this.dataSource.paginator = this.paginator; 
  }

  applyFilter(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
    this.get_data();
  }

  handleTopStories(){
    this.topStories = !this.topStories;
    this.get_data();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.get_data();
  }

  private get_data(){
    this._storyService.getStories(this.pageIndex, this.pageSize, this.filter, this.topStories).subscribe(
      x => {
          this.dataSource.data = x.items;
          this.length = x.totalCount;
      }
    );
  }
}