import { Component } from '@angular/core';
import { SnakeGameComponent } from '../../../../WindsurfSnakeJS/src/app/snake-game/snake-game.component';

@Component({
  selector: 'app-windsurf-game',
  template: '<app-snake-game></app-snake-game>',
  standalone: true,
  imports: [SnakeGameComponent]
})
export class WindsurfGameComponent {}
