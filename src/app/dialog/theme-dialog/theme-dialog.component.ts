import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ThemeService } from '../../core/services/theme.service';
import { Theme } from '../../core/models/theme-constants';

@Component({
  selector: 'app-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrl: './theme-dialog.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeDialogComponent {
  _theme = inject(ThemeService);
  themeOptions = Theme;

  changeTheme(value: Theme): void {
    this._theme.setTheme(value);
  }

}
