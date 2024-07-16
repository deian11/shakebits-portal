import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "@shared/shared.module";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        MainLayoutComponent
    ],
    imports: [
        SharedModule,
        MainLayoutRoutingModule
    ]
})
export class MainLayoutModule { }
