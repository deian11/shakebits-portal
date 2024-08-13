import { afterRender, Component } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';
import { LOCAL_STORAGE_PREFERRED_DARK_MODE, LOCAL_STORAGE_PREFERRED_REGION, LOCAL_STORAGE_PREFERRED_THEME } from './core/models/general-constants';
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
    private _theme: ThemeService,
  )
  {
    afterRender( () =>
    {
      this.setRegion();
      this.setTheme();
      this.setDarkMode();
    });
  }

  private setTheme() {
    let localStoragePreferredTheme = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_THEME);
    if (localStoragePreferredTheme !== null) {
      if(Object.values(Theme).includes(localStoragePreferredTheme as unknown as Theme))
      {
        this._theme.setTheme(<Theme>localStoragePreferredTheme as unknown as Theme);
      } else {
        this._theme.setTheme(Theme.Default);
      }
    } else {
      this._theme.setTheme(Theme.Default);
    }
  }

  private setDarkMode() {
    let darkModeLocalStorage = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_DARK_MODE);
    
    if(darkModeLocalStorage !== null)
    {
      this._theme.setDarkMode(Boolean(JSON.parse(darkModeLocalStorage)));
    } 
    else 
    {
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this._theme.setDarkMode(true);
        } else {
          this._theme.setDarkMode(false);
        }
      } else {
        this._theme.setDarkMode(false);
      }
    }
  }

  private setRegion() {
    let region = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_REGION);

    if(region === null)
    {
      return;
    }

    if(window.location.pathname[1].toLowerCase() === region[0].toLowerCase() &&
    window.location.pathname[2].toLowerCase() === region[1].toLowerCase())
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
