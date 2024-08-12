import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "@shared/shared.module";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { FootbarComponent } from "./footbar/footbar.component";
import { MatButtonModule } from "@angular/material/button";
import { LoadingLayoutComponent } from "../loading-layout/loading-layout.component";

@NgModule({
    declarations: [
        NavbarComponent,
        MainLayoutComponent,
        FootbarComponent,
    ],
    imports: [
        SharedModule,
        MainLayoutRoutingModule,
        MatButtonModule,
        LoadingLayoutComponent
    ],
})
export class MainLayoutModule { }
