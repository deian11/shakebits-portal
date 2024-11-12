import { ComponentType } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LOCAL_STORAGE_PREFERRED_DARK_MODE } from '@models/general-constants';
import { LocalStorageService } from './local-storage.service';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
    private dialog: MatDialog = inject(MatDialog);
    private _localStorage = inject(LocalStorageService);
    private _theme = inject(ThemeService);

    public openDarkModeModal(): void {
        if(this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_DARK_MODE) == null)
        {
            this.openDarkModeModalApply();
        } else {
            this._theme.setDarkMode();
            this._localStorage.SetItem(LOCAL_STORAGE_PREFERRED_DARK_MODE, String(this._theme.darkMode));
        }
    }
    private async openDarkModeModalApply(): Promise<MatDialogRef<any>> {
        let module = await import('@dialog/dark-mode-dialog/dark-mode-dialog.component');
        let dialogX = Object.values(module)[0] as ComponentType<unknown>;
        return this.dialog.open(dialogX);
    }

    public async openRegionModal(): Promise<MatDialogRef<any>> {
        let module = await import('@dialog/region-dialog/region-dialog.component');
        let dialogX = Object.values(module)[0] as ComponentType<unknown>;
        return this.dialog.open(dialogX);
    }

    public async openThemeModal(): Promise<MatDialogRef<any>> {
        let module = await import('@dialog/theme-dialog/theme-dialog.component');
        let dialogComponent = Object.values(module)[0] as ComponentType<unknown>;
        return this.dialog.open(dialogComponent);
    }

    

}
