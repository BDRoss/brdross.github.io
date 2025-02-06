import { Component } from '@angular/core';
import { SnakeGameComponent } from '../../../../JetbrainsSnakeJS/src/app/snake-game/snake-game.component';

@Component({
  selector: 'app-jetbrains-game',
  template: '<app-snake-game></app-snake-game>',
  standalone: true,
  imports: [SnakeGameComponent]
})
export class JetbrainsGameComponent {}
