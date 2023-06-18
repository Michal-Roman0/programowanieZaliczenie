import { Component, Input } from '@angular/core';
import { Game } from '../Game';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {
  @Input() game? : Game;

  constructor(public translationService:TranslationService){}
}
