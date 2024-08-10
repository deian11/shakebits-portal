import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { ErrorLayoutComponent } from "./layouts/error-layout/error-layout.component";
import { authenticationInterceptorInterceptor } from "./interceptors/authentication-interceptor.interceptor";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";

@NgModule({
    declarations: [
        ErrorLayoutComponent
    ],
    imports: [
        SharedModule,
        MainLayoutModule,
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(
            withFetch(),
            withInterceptors(
                [
                    authenticationInterceptorInterceptor
                ]
            )
        ),
    ]
})
export class CoreModule { }
