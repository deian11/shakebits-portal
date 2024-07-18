import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private environment;

  constructor(@Inject(PLATFORM_ID) private platformId:Object){
    this.environment = platformId;
  }

  public GetItem(key:string)
  {
    if(isPlatformBrowser(this.environment))
    {
      return localStorage.getItem(key);
    }

    return null;
  }

  public SetItem(key:string, value:string)
  {
    if(isPlatformBrowser(this.environment))
    {
      localStorage.setItem(key, value);
    } 
  }
}
