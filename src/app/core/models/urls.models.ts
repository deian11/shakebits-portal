import { isDevMode } from "@angular/core";

let API_URL = '';

if(isDevMode())
{
    API_URL = 'localhost:4200';
} else {
    API_URL = '//www.shakebits.eu/';
}

export abstract class BaseUrl {
    public static readonly home = (): string => API_URL;
    public static readonly redirect = (region: string): string => `${API_URL}/${region}/hello`;
    public static readonly hello = (): string => `${API_URL}/hello`;
    public static readonly ourSolutions = (): string => `${API_URL}/our-solutions`;
}