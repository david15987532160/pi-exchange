import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { IHttpJsonOptions } from '@core/models/http-options.model';

@Injectable()
export class HttpService {
    defaultParams = { api_key: environment.giphyKey };

    constructor(private http: HttpClient) {}

    generateUrl(url: string): string {
        return `${ environment.apiUrl }${ url }`;
    }

    get<T = any>(url: string, options?: IHttpJsonOptions): Observable<T> {
        const defaultOptions = { params: { ...this.defaultParams }, ...options };
        return this.http.get<T>(this.generateUrl(url), defaultOptions);
    }
}
