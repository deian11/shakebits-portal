import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId:Object){}

  public GetItem(key:string)
  {
    if(isPlatformBrowser(this.platformId))
    {
      return localStorage.getItem(key);
    }
    return null;
  }

  public SetItem(key:string, value:string)
  {
    if(isPlatformBrowser(this.platformId))
    {
      localStorage.setItem(key, value);
    }
  }

}
