import { Injectable, signal, WritableSignal } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class MainLayoutService {
    public displaySideNav : WritableSignal<boolean> = signal(false);
}