import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LocalStorageService } from './core/services/local-storage.service';
import { ThemeService } from './core/services/theme.service';
import { LOCAL_STORAGE_PREFERRED_REGION, LOCAL_STORAGE_PREFERRED_DARK_MODE, LOCAL_STORAGE_PREFERRED_THEME } from './core/models/general-constants';
import { REGIONS } from '@models/region-constants';
import { BaseUrl } from '@models/urls.models';
import { Theme } from './core/models/theme-constants';

export function appInitializerFactory(localStorageService: LocalStorageService, themeService: ThemeService) {
  return () => {
    if (typeof window !== 'undefined') {
      const region = localStorageService.GetItem(LOCAL_STORAGE_PREFERRED_REGION);

      if (region !== null && REGIONS[region] !== undefined) {
        if (window.location.pathname[1].toLowerCase() !== region[0].toLowerCase() ||
            window.location.pathname[2].toLowerCase() !== region[1].toLowerCase()) {
          window.location.href = BaseUrl.redirect(region);
        }
      }

      const localStoragePreferredTheme = localStorageService.GetItem(LOCAL_STORAGE_PREFERRED_THEME);
      if (localStoragePreferredTheme !== null) {
        if (Object.values(Theme).includes(localStoragePreferredTheme as unknown as Theme)) {
          themeService.setTheme(<Theme>localStoragePreferredTheme as unknown as Theme);
        } else {
          themeService.setTheme(Theme.Basic);
        }
      } else {
        themeService.setTheme(Theme.Basic);
      }

      const darkModeLocalStorage = localStorageService.GetItem(LOCAL_STORAGE_PREFERRED_DARK_MODE);
      if (darkModeLocalStorage !== null) {
        themeService.setDarkMode(Boolean(JSON.parse(darkModeLocalStorage)));
      } else {
        if (window.matchMedia) {
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeService.setDarkMode(true);
          } else {
            themeService.setDarkMode(false);
          }
        } else {
          themeService.setDarkMode(false);
        }
      }
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FeaturesModule,
    CoreModule,
  ],
  providers: [
    LocalStorageService,
    ThemeService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [LocalStorageService, ThemeService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
