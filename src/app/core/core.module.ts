import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@NgModule({
    providers: [HttpService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}
