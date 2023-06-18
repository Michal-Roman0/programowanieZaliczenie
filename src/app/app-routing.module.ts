import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { RandomGameComponent } from './random-game/random-game.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  //{path: '', redirectTo: '/top-games', pathMatch: 'full' },
  {path: 'games', component: GamesComponent},
  {path: 'top-games', component: TopGamesComponent},
  {path: 'random-game', component: RandomGameComponent},
  {path: 'website-info', component: WebsiteInfoComponent},
  {path: 'newsletter', component: NewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
