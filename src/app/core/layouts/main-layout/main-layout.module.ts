import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "@shared/shared.module";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { FootbarComponent } from "./footbar/footbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        FootbarComponent,
        MainLayoutComponent,  
    ],
    imports: [
        SharedModule,
        MainLayoutRoutingModule
    ],
})
export class MainLayoutModule { }
