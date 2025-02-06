import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'jetbrains',
        loadChildren: () => import('../../projects/JetbrainsSnakeJS/src/app/app.module').then(m => m.AppModule)
    },
    {
        path: 'windsurf',
        loadChildren: () => import('../../projects/WindsurfSnakeJS/src/app/app.module').then(m => m.AppModule)
    },
    { 
        path: '',
        redirectTo: 'jetbrains',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }