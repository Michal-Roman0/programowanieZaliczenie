import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { RandomGameComponent } from './random-game/random-game.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameInfoComponent,
    TopGamesComponent,
    RandomGameComponent,
    WebsiteInfoComponent,
    NewsletterComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
