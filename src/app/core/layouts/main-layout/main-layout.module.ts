import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "@shared/shared.module";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { FootbarComponent } from "./footbar/footbar.component";

@NgModule({
    imports: [
        SharedModule,
        MainLayoutRoutingModule,
    ],
    declarations: [
        NavbarComponent,
        MainLayoutComponent,
        FootbarComponent
    ]
})
export class MainLayoutModule { }
