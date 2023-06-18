import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../Game';

@Component({
  selector: 'app-random-game',
  templateUrl: './random-game.component.html',
  styleUrls: ['./random-game.component.css']
})
export class RandomGameComponent {
  constructor(private gameService: GameService){}

  games : Game[] = [];
  selectedGame?: Game;

  ngOnInit(): void{
    this.getGames();
  }
  
  getGames() : void{
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  onRandomize(): void{
    var i = Math.floor(Math.random() * this.games.length);
    this.selectedGame = this.games[i];
  }
}
