import { Injectable } from '@angular/core';
import { GAMES } from './LocalGamesDatabase';
import { Game } from './Game';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]>{
    const games = of(GAMES);
    return games;
  }
}
