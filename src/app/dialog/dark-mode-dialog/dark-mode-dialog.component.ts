import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-dark-mode-dialog',
  templateUrl: './dark-mode-dialog.component.html',
  styleUrl: './dark-mode-dialog.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDialogContent
  ]
})
export class DarkModeDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DarkModeDialogComponent>);
  private _theme = inject(ThemeService);

  submitDarkMode(): void {
    this._theme.setDarkMode();
    this._theme.applyDarkModeLocalStorage(this._theme.darkMode());
    this.dialogRef.close();
  }

}
