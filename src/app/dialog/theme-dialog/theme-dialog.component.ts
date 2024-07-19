import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrl: './theme-dialog.component.scss',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions
  ]
})
export class ThemeDialogComponent {

  setTheme(theme:string) : void{

  }

}
