import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../models/theme-constants';
import { LocalStorageService } from './local-storage.service';
import { DARK_MODE, LOCAL_STORAGE_PREFERRED_DARK_MODE, LOCAL_STORAGE_PREFERRED_THEME, THEME } from '../models/general-constants';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  _localStorage = inject(LocalStorageService);

  public theme = signal(Theme.Basic);
  public darkMode = true;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  public setTheme(value: Theme): void {
    this.theme.set(value);
    this.applyTheme(value);
  }

  public setDarkMode(input?: boolean): void {
    if(input !== undefined)
    {
      this.darkMode = input;
      this.applyDarkMode(input);
    } 
    else 
    {
      var newValue = !this.darkMode;
      this.darkMode = newValue;
      this.applyDarkMode(newValue);
    }
  }

  private applyTheme(value: Theme): void {
    if(isPlatformBrowser(this.platformId)) {
      window.document.documentElement.setAttribute(THEME, value);
      this._localStorage.SetItem(LOCAL_STORAGE_PREFERRED_THEME, value);
    }
  }

  private applyDarkMode(value: boolean): void {
    if(isPlatformBrowser(this.platformId)) {
      window.document.documentElement.setAttribute(DARK_MODE, String(value));
    }
  }

  public applyDarkModeLocalStorage(value: boolean): void {
    if(isPlatformBrowser(this.platformId)) {
      this._localStorage.SetItem(LOCAL_STORAGE_PREFERRED_DARK_MODE, String(value));
    }
  }
}
