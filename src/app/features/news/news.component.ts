import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewsItem } from './news.model';
import { StoryService } from './news.service';
import { MatTabChangeEvent } from '@angular/material/tabs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  _storyService = inject(StoryService);

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  topStories = false;
  displayedColumns: string[] = ['title'];
  dataSource = new MatTableDataSource<NewsItem>([]);
  pageEvent: PageEvent = new PageEvent;
  filter: string = "";

  ngOnInit() {
    this.get_data();
    this.dataSource.paginator = this.paginator; 
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.topStories = false;
    }
    if (event.index === 1) {
      this.topStories = true;
    }
    this.get_data();
  }

  applyFilter(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
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
    this._storyService.getNews(this.pageIndex, this.pageSize, this.filter, this.topStories).subscribe(
      x => {
          this.dataSource.data = x.items;
          this.length = x.totalCount;
      }
    );
  }
}
