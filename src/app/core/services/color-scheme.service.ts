import { Inject, inject, Injectable, PLATFORM_ID, signal, WritableSignal } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { isPlatformBrowser } from "@angular/common";
import { DARK_MODE } from "@models/general-constants";

@Injectable({
  providedIn: 'root'
})
export class ColorSchemeService {
  public DarkMode: WritableSignal<boolean> = signal(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any) {}  

  public setDarkMode(value: boolean): void {
    this.DarkMode.set(value);
    this.apply(value);
  }

  private apply(value: boolean): void {
    if(isPlatformBrowser(this.platformId)) {
      window.document.documentElement.setAttribute(DARK_MODE, value ? 'dark' : 'light' );
    }
  }
}