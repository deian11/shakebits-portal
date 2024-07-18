// import { HttpClient } from '@angular/common/http';
// import { afterRender, Component, inject, isDevMode } from '@angular/core';
// import { LocalStorageService } from '../../services/local-storage.service';
// import { PROD_ENVIRONMENT } from '../../models/environment-constants';
// import { regionsCodes } from '../../models/region-constants';
// import { DARK_THEME, DEFAULT_THEME, LOCAL_STORAGE_PREFERRED_REGION, THEME_KEY } from '../../models/general-constants';
// import { FootbarComponent } from './footbar/footbar.component';

import { Component } from "@angular/core";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  // ls = inject(LocalStorageService);
  // http = inject(HttpClient);

  // constructor()
  // {
  //   afterRender(() => {
  //     this.setTheme();
  //     this.setRegion(this.ls, this.http);
  //   })
  // }

  // private setRegion(ls: LocalStorageService, http: HttpClient) {

  //   // get local storage region preferrence
  //   let region = ls.GetItem(LOCAL_STORAGE_PREFERRED_REGION);

  //   // if local storage preferred region exist
  //   if(region !== null)
  //   {
  //     // verify if we don't have in dictionary local storage preferred region
  //     if(!regionsCodes.includes(region.toLocaleLowerCase()))
  //     {
  //       console.log("we don't have the preferred language: RETURN");
  //       return;
  //     }

  //     // verify if current page is equal with local storage preferred region
  //     if(window.location.pathname[1].toLocaleLowerCase() === region[0].toLocaleLowerCase() &&
  //       window.location.pathname[2].toLocaleLowerCase() === region[1].toLocaleLowerCase())
  //     {
  //       console.log("user are in the corect page, current page equal local storage preferred region: RETURN");

  //       // update the display footer region
        

  //       return;
  //     }

  //     // redirect the user to his preferred region
  //     if(!isDevMode()){
  //       window.location.href = PROD_ENVIRONMENT.URL+region;
  //     }
  //   } 

    // else {
    // USER don't have a preferred region, I have to go to third-party service obtain his region and 
    // ask him if he want to go to the page from his region.
    // if he wants than set the local storage preferred region his region else set default "en"
    // so that next time he enter the webpage we don't have to obtain his region

    //   http.get(IP_GEOLOCATION_API, { responseType: 'text' }).subscribe(
    //     {
    //       next: response => {
    //         let countryCode = JSON.parse(response)?.countryCode?.toLocaleLowerCase();
    //         if (REGIONS.includes(countryCode)) {
    //           console.log("COUNTRY CODE: " + countryCode?.toLocaleLowerCase());
    //           this.confirmationService.confirm({
    //             header: 'Welcome to Shakebits!',
    //             message: 'We noticed that you are visiting us from ' + JSON.parse(response)?.countryName + '. Would you like to access the website tailored for your region?',
    //             icon: 'pi pi-info-circle',
    //             accept: () => {
    //               ls.SetItem(LS_REGION, "ro");
    //               window.location.href = SHAKEBITS_EU_HOST + "ro";
    //               console.log("EXECUTED 2");
    //             },
    //             reject: () => {
    //               ls.SetItem(LS_REGION, "en");
    //             },
    //             key: "confirmRegionDialog"
    //           });
    //         }
    //       },
    //       error: err =>{
    //         console.log("EROARE PE CALL THIRD_PARTY SERVICE: "+ err);
    //       }
    //     }
    //   );
    // }

  // }

  // private setTheme() {
  //   const theme = this.ls.GetItem(THEME_KEY);
  //   if (theme === null) {
  //     // Check to see if Media-Queries are supported
  //     if (window.matchMedia) {
  //       // Check if the dark-mode Media-Query matches
  //       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //         document.documentElement.setAttribute(THEME_KEY, DARK_THEME);
  //         this.ls.SetItem(THEME_KEY, DARK_THEME);
  //       } else {
  //         document.documentElement.setAttribute(THEME_KEY, DEFAULT_THEME);
  //         this.ls.SetItem(THEME_KEY, DEFAULT_THEME);
  //       }
  //     } else {
  //       document.documentElement.setAttribute(THEME_KEY, DEFAULT_THEME);
  //       this.ls.SetItem(THEME_KEY, DEFAULT_THEME);
  //     }
  //   } else {
  //     document.documentElement.setAttribute(THEME_KEY, theme);
  //     this.ls.SetItem(THEME_KEY, theme);
  //   }
  // }
  
}
