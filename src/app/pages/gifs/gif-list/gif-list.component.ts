import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { catchError, EMPTY, finalize, map, merge, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GifListService } from '@app/pages/gifs/services/gif-list.service';
import { IGIF } from '@app/pages/gifs/models/gif.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RatingEnum } from '@shared/enums/rating.enum';

@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifListComponent implements OnInit {
    RatingEnum = RatingEnum;

    trendingList: IGIF[] = [];

    gifsByCols$!: Observable<IGIF[][]>;

    searchSubject$ = new Subject<string>();

    isLoading = true;

    constructor(
        private cdRef: ChangeDetectorRef,
        private modalService: NzModalService,
        private msgService: NzMessageService,
        private gifListService: GifListService,
    ) {}

    get trendingGIFs(): Observable<IGIF[]> {
        return this.gifListService.getTrendingList()
            .pipe(
                catchError(err => {
                    this.msgService.error(err);
                    return EMPTY;
                }),
                map(res => res.data),
                tap(data => this.trendingList = [...data]), // Save trending list for resetting search
                finalize(() => {
                    this.isLoading = false;
                    this.cdRef.markForCheck();
                })
            );
    }

    get searchedGIFs(): Observable<IGIF[]> {
        return this.searchSubject$
            .asObservable()
            .pipe(switchMap(searchText => this.searchGIFs(searchText)));
    }

    get watchSource(): Observable<IGIF[][]> {
        const source$ = [this.trendingGIFs, this.searchedGIFs];
        return merge(...source$)
            .pipe(
                map(data => this.splitToCols(data)),
                finalize(() => {
                    this.isLoading = false;
                    this.cdRef.markForCheck();
                })
            );
    }

    ngOnInit(): void {
        this.gifsByCols$ = this.watchSource;
    }

    searchGIFs(value: string): Observable<IGIF[]> {
        if (!value) {
            return of([...this.trendingList]).pipe(finalize(() => {
                this.isLoading = false;
                this.cdRef.markForCheck();
            }));
        }

        this.isLoading = true;
        return this.gifListService.searchGIFs(value)
            .pipe(
                catchError(err => {
                    this.msgService.error(err);
                    return EMPTY;
                }),
                map(res => res.data),
                finalize(() => {
                    this.isLoading = false;
                    this.cdRef.markForCheck();
                })
            );
    }

    splitToCols<T = any>(arr: T[], cols: number = 4): T[][] {
        const length = arr.length;
        const res = [];

        for (let i = 0; i < cols; ++i) {
            res.push(arr.splice(0, (length / cols) + 1));
        }

        return res;
    };

    openImageModal(modalTitle: TemplateRef<{}>, modalContent: TemplateRef<{}>): void {
        const modalRef = this.modalService.create({
            nzTitle: modalTitle,
            nzContent: modalContent,
            nzMaskClosable: false,
            nzClosable: false,
            nzStyle: { top: '20px' },
            nzBodyStyle: { padding: '0' },
        });
    }

    setSearchText(value: string): void {
        this.searchSubject$.next(value);
    }

    trackByFn(index: number, item: IGIF): string {
        return item.id;
    }
}
