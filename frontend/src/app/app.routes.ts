import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '', component: Home
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}