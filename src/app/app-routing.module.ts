import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'gif-list',
        loadChildren: () => import('./pages/gifs/gifs.module').then(m => m.GifsModule)
    },
    { path: '', pathMatch: 'full', redirectTo: '/gif-list' },
    // { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
