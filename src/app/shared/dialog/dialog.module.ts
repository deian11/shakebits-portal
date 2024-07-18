import { NgModule } from "@angular/core";
import { ThemeDialogComponent } from "./theme-dialog/theme-dialog.component";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [ThemeDialogComponent],
    imports: [
        MatDialogModule,
        MatButtonModule, 
        MatDialogActions, 
        MatDialogClose, 
        MatDialogTitle, 
        MatDialogContent
    ]
})
export class DialogModule { }
