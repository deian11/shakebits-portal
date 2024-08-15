import { Component, inject } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected _mainLayoutService = inject(MainLayoutService);
}
