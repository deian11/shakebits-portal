import { environment } from "../../../environments/environment";

const API_URL = environment.apiUrl;

export abstract class BaseUrl {
    public static readonly home = (): string => `${API_URL}`;
    public static readonly hello = (): string => `${API_URL}/hello`;
    public static readonly ourSolutions = (): string => `${API_URL}/our-solutions`;
}