import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../models/theme-constants';
import { LocalStorageService } from './local-storage.service';
import { LOCAL_STORAGE_PREFERRED_THEME, THEME } from '../models/general-constants';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  _localStorage = inject(LocalStorageService);

  theme = signal(Theme.Light);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any) {}  

  public setTheme(value: Theme): void {
    this.theme.set(value);
    this.apply(value);
  }

  private apply(value: Theme): void {
    if(isPlatformBrowser(this.platformId)) {
      window.document.documentElement.setAttribute(THEME, value);
      this._localStorage.SetItem(LOCAL_STORAGE_PREFERRED_THEME, value);
    }
  }
}
