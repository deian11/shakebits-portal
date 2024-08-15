import { Component, inject, signal } from "@angular/core";
import { MainLayoutService } from "./main-layout.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  protected _mainLayoutService = inject(MainLayoutService);
}
