import { Component, inject } from '@angular/core';
import { ThemeDialogService } from '@shared/dialog/theme-dialog/theme-dialog.service';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrl: './footbar.component.scss'
})
export class FootbarComponent {

  themeDialogService = inject(ThemeDialogService);

  openThemeModal(): void {
    this.themeDialogService.openThemeDialog();
  }

}
