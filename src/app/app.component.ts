import { afterRender, AfterRenderPhase, Component } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';
import { LOCAL_STORAGE_PREFERRED_THEME } from './core/models/general-constants';
import { ThemeService } from './core/services/theme.service';
import { Theme } from './core/models/theme-constants';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
})
export class AppComponent {
  title = 'shakebits-portal';

  constructor(
    private _localStorage: LocalStorageService,
    private _theme: ThemeService)
  {
    afterRender( () =>
    {
      this.themeHandle();
    }, {phase: AfterRenderPhase.Write});


  }

  private themeHandle() {
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

}
