import { isDevMode } from "@angular/core";

let URL = '';
let API_URL = 'https://api.shakebits.eu';

if(isDevMode())
{
    URL = 'localhost:4200';
} else {
    URL = '//www.shakebits.eu';
}

export abstract class BaseUrl {
    public static readonly home = (): string => URL;
    public static readonly redirect = (region: string): string => `${URL}/${region}/hello`;
    public static readonly hello = (): string => `${URL}/hello`;
    public static readonly ourSolutions = (): string => `${URL}/our-solutions`;
}

export abstract class ApiUrl {
    public static readonly news = (offset: number = 0, limit: number = 10, search: string = "", topStories: boolean = false): 
        string =>`${API_URL}/news?offset=${offset}&limit=${limit}&search=${search}&topStories=${topStories}`;
}
