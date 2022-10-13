import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [LayoutComponent, HeaderComponent],
    imports: [
        SharedModule,
        NzMenuModule,
        NzLayoutModule,
    ],
    exports: [LayoutComponent],
})
export class LayoutModule {
}
