import { Component } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';
import { ThemeService } from './core/services/theme.service';

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
  }
}
