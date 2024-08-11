import { afterRender, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
    MatButtonModule,
    MatDialogModule,
  ],
})
export class RegionDialogComponent {
  readonly _localStorage = inject(LocalStorageService);
  readonly dialogRef = inject(MatDialogRef<RegionDialogComponent>);

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
    window.location.href = BaseUrl.home();
  }
}
