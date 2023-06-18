import { Component} from '@angular/core';
import { Game } from '../Game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent {
  games: Game[] = [];
  topGame1?: Game;
  topGame2?: Game;
  topGame3?: Game;

  constructor(private gameService: GameService){}


  ngOnInit(): void{
    this.getGames();
  }
  
  getGames() : void{
    this.gameService.getGames().subscribe(games => this.games = games);
    this.topGame1 = this.games[0];
    this.topGame2 = this.games[1];
    this.topGame3 = this.games[2];
  }

  
}
