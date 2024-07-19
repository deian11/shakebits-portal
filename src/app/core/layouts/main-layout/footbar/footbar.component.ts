import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrl: './footbar.component.scss'
})
export class FootbarComponent {
  private dialog: MatDialog = inject(MatDialog);

  async openThemeModal(): Promise<MatDialogRef<any>> {
    let module = await import('@dialog/theme-dialog/theme-dialog.component');
    let dialogComponent = Object.values(module)[0] as ComponentType<unknown>;
    return this.dialog.open(dialogComponent);
  }

  async openRegionModal(): Promise<MatDialogRef<any>> {
    let module = await import('@dialog/region-dialog/region-dialog.component');
    let dialogComponent = Object.values(module)[0] as ComponentType<unknown>;
    return this.dialog.open(dialogComponent);
  }

}
