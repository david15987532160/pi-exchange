import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { IconsProviderModule } from '@app/icons-provider.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,

        NzSpinModule,
        NzFormModule,
        NzModalModule,
        NzToolTipModule,
        NzPageHeaderModule,
        IconsProviderModule,
    ],
    exports: [
        FormsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,

        NzSpinModule,
        NzFormModule,
        NzModalModule,
        NzToolTipModule,
        NzPageHeaderModule,
        IconsProviderModule,
    ]
})
export class SharedModule {
}
