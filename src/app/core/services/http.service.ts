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

    get(url: string, params?: { [k: string]: any }, options?: IHttpJsonOptions): Observable<any> {
        const defaultOptions = {
            params: { ...this.defaultParams, ...params },
            ...options
        };
        return this.http.get(this.generateUrl(url), defaultOptions);
    }
}
