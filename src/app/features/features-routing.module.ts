import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "../core/layouts/main-layout/main-layout.component";
import { HelloComponent } from "./hello/hello.component";

const routes: Routes = [
    {
      path: '', component: MainLayoutComponent, children: [
        { path: '', redirectTo: 'hello', pathMatch: 'full' },
        { path: 'hello', component: HelloComponent },
        { path: 'solutions', loadChildren: () => import('./solutions/solutions.module').then(m => m.SolutionsModule) },
        { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
