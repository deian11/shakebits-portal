import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ThemeDialogService {

  constructor(private dialog: MatDialog) { }

  async openThemeDialog(): Promise<MatDialogRef<any>> {

    let chunk = await import('./theme-dialog.component');

    let dialogComponent = Object.values(chunk)[0] as ComponentType<unknown>;
    
    return this.dialog.open(dialogComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
