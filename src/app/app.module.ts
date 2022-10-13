import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { LayoutModule } from '@app/layout/layout.module';
import { CoreModule } from '@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,

        BrowserModule,
        BrowserAnimationsModule,

        CoreModule,
        LayoutModule,
        SharedModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
