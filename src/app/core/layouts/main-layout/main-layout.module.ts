import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "@shared/shared.module";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { ThemeDialogBody, ThemeDialogComponent } from './footbar/theme-dialog/theme-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FootbarComponent } from "./footbar/footbar.component";

@NgModule({
    imports: [
        SharedModule,
        MainLayoutRoutingModule,
        MatDialogModule,
        MatButtonModule,
    ],
    declarations: [

        NavbarComponent,
        MainLayoutComponent,   
        FootbarComponent,
        ThemeDialogBody, 
        ThemeDialogComponent,
    ],
})
export class MainLayoutModule { }
