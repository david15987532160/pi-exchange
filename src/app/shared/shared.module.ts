import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { IconsProviderModule } from '@app/icons-provider.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [
        SearchInputComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,

        NzSpinModule,
        NzFormModule,
        NzModalModule,
        NzInputModule,
        NzButtonModule,
        NzToolTipModule,
        NzPageHeaderModule,
        IconsProviderModule,
        ReactiveFormsModule,
    ],
    exports: [
        // Components
        SearchInputComponent,

        // Pipes

        // Directives

        // Modules
        FormsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,

        // Zorro Modules
        NzSpinModule,
        NzFormModule,
        NzModalModule,
        NzInputModule,
        NzButtonModule,
        NzToolTipModule,
        NzPageHeaderModule,
        IconsProviderModule,
    ]
})
export class SharedModule {
}
