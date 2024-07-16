import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ErrorLayoutComponent } from "./layouts/error-layout/error-layout.component";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";
import { authenticationInterceptorInterceptor } from "./interceptors/authentication-interceptor.interceptor";

@NgModule({
    declarations: [
        ErrorLayoutComponent
    ],
    imports: [
        SharedModule,
        MainLayoutModule
    ],
    exports: [
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(
            withInterceptors(
                [
                    authenticationInterceptorInterceptor
                ]
            )
        )
    ]
})
export class CoreModule { }
