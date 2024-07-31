import { Component, inject, model, signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrl: './footbar.component.scss'
})
export class FootbarComponent {
  private dialog: MatDialog = inject(MatDialog);
  private readonly _regionService = inject(RegionService);

  readonly animal = signal('');
  readonly name = model('');
  protected region = this._regionService.GetCurrentRegion();

  async openThemeModal(): Promise<MatDialogRef<any>> {
    let module = await import('@dialog/theme-dialog/theme-dialog.component');
    let dialogComponent = Object.values(module)[0] as ComponentType<unknown>;
    return this.dialog.open(dialogComponent);
  }

  async openRegionModal(): Promise<MatDialogRef<any>> {
    let module = await import('@dialog/region-dialog/region-dialog.component');
    let dialogX = Object.values(module)[0] as ComponentType<unknown>;
    let dial = this.dialog.open(dialogX, {
      data: {name: this.name(), animal: this.animal()},
    });
    return dial;
  }

}
