import { NgModule } from '@angular/core';
import { GifListRoutingModule } from './gif-list-routing.module';
import { GifListComponent } from './gif-list.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@NgModule({
    declarations: [GifListComponent],
    imports: [GifListRoutingModule],
    exports: [GifListComponent],
    providers: [NzMessageService]
})
export class GifListModule {
}
