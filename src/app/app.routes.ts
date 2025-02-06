import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'jetbrains',
        loadComponent: () => import('../../projects/JetbrainsSnakeJS/src/app/snake-game/snake-game.component').then(m => m.SnakeGameComponent)
    },
    {
        path: 'windsurf',
        loadComponent: () => import('../../projects/WindsurfSnakeJS/src/app/snake-game/snake-game.component').then(m => m.SnakeGameComponent)
    },
    {
        path: '',
        redirectTo: 'jetbrains',
        pathMatch: 'full'
    }
];
