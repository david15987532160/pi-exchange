import { NgModule } from '@angular/core';
import { GifsRoutingModule } from './gifs-routing.module';
import { GifListComponent } from './gif-list/gif-list.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GifListService } from '@app/pages/gifs/gif-list/services/gif-list.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [GifListComponent],
    imports: [GifsRoutingModule, SharedModule],
    exports: [GifListComponent],
    providers: [NzMessageService, GifListService]
})
export class GifsModule {
}
