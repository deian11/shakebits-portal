import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-layout',
  templateUrl: './loading-layout.component.html',
  styleUrl: './loading-layout.component.scss',
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class LoadingLayoutComponent {
}
