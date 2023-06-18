import { Component } from '@angular/core';
import { TranslationService } from './translation.service';
import { TranslatePipe } from './translate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-website';
  selectedTopBar = 'games';
  selectedLeftBar = 'topGames';
  language: string = 'eng';

constructor(private translationService: TranslationService){}
  changeLanguage(lang: string){
    this.translationService.language = lang;
    this.language = lang;
  }
  
  changeTopBarElement(el: string){
    this.selectedTopBar = el;
  }
  changeLeftBarElement(el: string){
    this.selectedLeftBar = el;
  }
}
