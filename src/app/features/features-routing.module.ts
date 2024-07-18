import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "../core/layouts/main-layout/main-layout.component";



const routes: Routes = [
    {
      path: '', component: MainLayoutComponent, children: [
        { path: 'solutions', loadChildren: () => import('./solutions/solutions.module').then(m => m.SolutionsModule) },
      ]
    },
    
    // example Error Layout and redirect all unknown paths to error
    // {
    //   path: 'error',
    //   component: ErrorLayoutComponent,
    //   children: [
    //       {
    //           path: '',
    //           loadChildren: () =>
    //               import('./errors/errors.feature.module').then(
    //                   (m) => m.ErrorsFeatureModule
    //               ),
    //       },
    //   ],
    // },
    // { path: '**', redirectTo: 'error/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
