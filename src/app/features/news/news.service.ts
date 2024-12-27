import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { NewsResponse, NewsItem } from "./news.model";
import { ApiUrl } from "@models/urls.models";


@Injectable({
    providedIn: 'root'
})
export class StoryService {
  _http = inject(HttpClient);

  fetchStories(offset?: number, limit?: number, filter?: string, topStories?: boolean): Observable<NewsItem[]> {
    return this._http.get<NewsResponse>(ApiUrl.news(offset, limit, filter, topStories)).pipe(
      map((res) => res.items)
    );
  }

  getNews(offset?: number, limit?: number, filter?: string, topStories?: boolean) {
    return this._http.get<NewsResponse>(ApiUrl.news(offset, limit, filter, topStories));
  }
}
