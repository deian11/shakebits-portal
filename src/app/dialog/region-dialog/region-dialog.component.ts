import { afterRender, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LOCAL_STORAGE_PREFERRED_REGION } from '../../core/models/general-constants';
import { BaseUrl } from '@models/urls.models';
import { LocalStorageService } from '../../core/services/local-storage.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-region-dialog',
  templateUrl: './region-dialog.component.html',
  styleUrl: './region-dialog.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class RegionDialogComponent {
  readonly _localStorage = inject(LocalStorageService);
  readonly dialogRef = inject(MatDialogRef<RegionDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  constructor(){
    afterRender(()=> 
      {
        const region = this._localStorage.GetItem(LOCAL_STORAGE_PREFERRED_REGION);
        if(region !== null)
        {
          document.getElementById(region)!.style.opacity = "0";
          document.getElementById(region)!.style.cursor = "default";
        }
      });
  }

  setRegion(region: string)
  {
    this._localStorage.SetItem(LOCAL_STORAGE_PREFERRED_REGION, region);
    console.log("HERE: ");
    console.log(BaseUrl.home());
    window.location.href = BaseUrl.home();
  }

}
