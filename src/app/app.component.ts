import { afterRender, Component } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';
import { LOCAL_STORAGE_PREFERRED_REGION, LOCAL_STORAGE_PREFERRED_THEME } from './core/models/general-constants';
import { ThemeService } from './core/services/theme.service';
import { Theme } from './core/models/theme-constants';
import { REGIONS } from '@models/region-constants';
import { BaseUrl } from '@models/urls.models';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
})
export class AppComponent {
  title = 'shakebits-portal';

  constructor(
    private _localStorage: LocalStorageService,
    private _theme: ThemeService
  )
  {
    afterRender( () =>
    {
      this.setRegion();
      this.setTheme();
    });
  }

  private setTheme() {
    let localStoragePreferredTheme = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_THEME);
    if (localStoragePreferredTheme === null) {
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this._theme.setTheme(Theme.Dark);
        } else {
          this._theme.setTheme(Theme.Light);
        }
      } else {
        this._theme.setTheme(Theme.Light);
      }
    } else {        
      if(Object.values(Theme).includes(localStoragePreferredTheme as unknown as Theme))
      {
        this._theme.setTheme(<Theme>localStoragePreferredTheme as unknown as Theme);
      } else {
        this._theme.setTheme(Theme.Light);
      }
    }
  }

  private setRegion() {
    let region = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_REGION);

    if(region === null)
    {
      return;
    }

    if(window.location.pathname[1].toLocaleLowerCase() === region[0].toLocaleLowerCase() &&
    window.location.pathname[2].toLocaleLowerCase() === region[1].toLocaleLowerCase())
    {
      return;
    }

    if(REGIONS[region] === undefined)
    {
      return;
    }

    window.location.href = BaseUrl.redirect(region);
  }

}
