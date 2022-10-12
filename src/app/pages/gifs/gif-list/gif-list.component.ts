import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { catchError, EMPTY, finalize, map, Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GifListService } from '@app/pages/gifs/gif-list/services/gif-list.service';
import { IGIF } from '@app/pages/gifs/models/gif.model';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifListComponent {
    gifsByCols$: Observable<IGIF[][]> = this.getTrendingGifs.pipe(map(res => this.splitToCols(res, 4)),);

    isLoading = true;

    constructor(
        private cdRef: ChangeDetectorRef,
        private modalService: NzModalService,
        private msgService: NzMessageService,
        private gifListService: GifListService,
    ) {}

    get getTrendingGifs(): Observable<IGIF[]> {
        return this.gifListService.getTrending()
            .pipe(
                catchError(err => {
                    this.msgService.error(err);
                    return EMPTY;
                }),
                map(res => res.data),
                finalize(() => this.isLoading = false)
            );
    }

    splitToCols(arr: any[], cols: number): any[] {
        const length = arr.length;
        const res = [];

        for (let i = 0; i < cols; ++i) {
            res.push(arr.splice(0, (length / cols) + 1));
        }

        return res;
    };

    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>): void {
        const modalRef = this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzMaskClosable: false,
            nzClosable: false,
            nzStyle: { top: '20px' },
        });
    }

    trackByFn(index: number, item: IGIF): string {
        return item.id;
    }
}
