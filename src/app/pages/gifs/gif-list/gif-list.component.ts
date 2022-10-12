import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '@core/services/http.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifListComponent implements OnInit {
    constructor(private http: HttpService, private msgService: NzMessageService) {}

    ngOnInit() {
        this.getTrending()
            .pipe(
                catchError(err => {
                    this.msgService.error(err);
                    return EMPTY;
                })
            )
            .subscribe(res => {
                console.log(res);
            });
    }

    getTrending(): Observable<any> {
        return this.http.get('/gifs/trending');
    }
}
