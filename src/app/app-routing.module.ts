import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'gifs',
        loadChildren: () => import('./pages/gifs/gif-list/gif-list.module').then(m => m.GifListModule)
    },
    { path: '', pathMatch: 'full', redirectTo: '/gifs' },
    // { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
