import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifListComponent } from './gif-list/gif-list.component';

const routes: Routes = [
    { path: '', component: GifListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GifsRoutingModule {
}
