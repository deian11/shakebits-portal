import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { StoriesResponse, StoryItem } from "./stories.model";
import { ApiUrl } from "@models/urls.models";


@Injectable({
    providedIn: 'root'
})
export class StoryService {
  _http = inject(HttpClient);

  fetchStories(offset?: number, limit?: number, filter?: string, topStories?: boolean): Observable<StoryItem[]> {
    return this._http.get<StoriesResponse>(ApiUrl.news(offset, limit, filter, topStories)).pipe(
      map((res) => res.items)
    );
  }

  getStories(offset?: number, limit?: number, filter?: string, topStories?: boolean) {
    return this._http.get<StoriesResponse>(ApiUrl.news(offset, limit, filter, topStories));
  }
}
