import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { LOCAL_STORAGE_PREFERRED_REGION } from '@models/general-constants';
import { Region, REGIONS } from '@models/region-constants';


@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private readonly _localStorage = inject(LocalStorageService);

  public GetCurrentRegion(): [Region, boolean] | undefined {

    if (typeof window !== "undefined") {
      let localStorage = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_REGION);

      if(localStorage === null)
      {
        return [REGIONS[window.location.pathname[1].toLowerCase()+window.location.pathname[2].toLowerCase()], false];
      }

      if(REGIONS[localStorage] === undefined)
      {
        return [REGIONS[window.location.pathname[1].toLowerCase()+window.location.pathname[2].toLowerCase()], false]; 
      }

      return [REGIONS[localStorage], true];
    }

    return undefined;
  }

}
