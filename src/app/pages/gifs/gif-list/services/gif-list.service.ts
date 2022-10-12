import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { IPaginationData } from '@core/models/pagination.model';
import { IGIF } from '@app/pages/gifs/models/gif.model';

@Injectable()
export class GifListService {
    private static readonly trendingUrl = '/gifs/trending';

    constructor(private http: HttpService) { }

    getTrending(): Observable<IPaginationData<IGIF>> {
        return this.http.get(GifListService.trendingUrl);
    }
}
