import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public languages = ['eng', 'pl'];
  public language = 'eng';
  
  private translations: {[key: string]: TranslationSet } =
  {
    eng: {
      language: 'eng',
      values : {
        siteTitle: "The Game Guru",
        subTitle: "A website where you can find the best games to play!",
        barMain: "Games",
        barInformation: "Information",
        informationLine1: "We are a non profit website, we want to share the best games according to our evaluation and support indie games that deserve more attention.",
        informationLine2: "We do not own any of the games presented on this website. All rights go to their respectful owners.",
        informationLine3: "If you have any questions, don't hesitate to contact us at 555-555555 or at totallyRealMail@mail.com",
        topGames: "Top Games",
        gamesList: "Games List",
        gamesListSelect: "Select the game to get more info:",
        producer: "Producer:",
        genre: "Genre:",
        release: "Release Year:",
        description: "Description:",
        steamLink: "Steam Store Link:",
        randomGame: "Random Game",
        randomGameTitle: "Click the button to randomize the next game you could play!",
        randomGameBtn: "Propose me a game!",
        newsletterTitle: "Sign up to recieve our newsletter!",
        newsletterMailAdded: "added!",
        newsletterBtn: "Sign up",
        footerContact: "Contact Us",
        footerPrivacy: "Privacy Policy",
        footerText: "Copyright 2023-2023. University project by Michał Roman"
      }
    },
    pl: {
      language: 'pl',
      values : {
        siteTitle: "Gamingowy Guru",
        subTitle: "Fantastyczna strona na której znajdziesz propozycje najlepszych gier!",
        barMain: "Gry",
        barInformation: "Informacje",
        informationLine1: "Jest to strona non-profit, stworzona aby móc podzielic się swoimi ulubionymi grami i wspierać gry indie zasługujące na więcej uwagi.",
        informationLine2: "Nie jestem właścicielem żadnej z gier zaprezentowanych na tej stronie. Wszystkie prawa należą do ich odpowiednich właścicieli.",
        informationLine3: "Jeśli masz jakieś pytania, skontaktuj się ze mną: 555-555555 lub wyślij mail na: totallyRealMail@mail.com",
        topGames: "Top Gry",
        gamesList: "Lista Gier",
        gamesListSelect: "Zaznacz grę aby dowiedzieć się o niej więcej:",
        producer: "Producent:",
        genre: "Gatunek:",
        release: "Rok wydania:",
        description: "Opis:",
        steamLink: "Link do sklepu Steam:",
        randomGame: "Losuj Grę",
        randomGameTitle: "Naciśnij przycisk aby wylosować propozycję następnej gry w którą możesz zagrać!",
        randomGameBtn: "Zaproponuj mi grę!",
        newsletterTitle: "Zapisz się aby dostawać cotygodniowy newsletter!",
        newsletterMailAdded: "dodany!",
        newsletterBtn: "Zapisz się",
        footerContact: "Kontakt",
        footerPrivacy: "Polityka prywatności",
        footerText: "Copyright 2023-2023. Projekt na studia, Michał Roman"
      }
    }
  }

  constructor() { }

  translate(key: string): string{
    return this.translations[this.language].values[key];
  }
}
export class TranslationSet{
  public language?: string;
  public values: {[language: string]:string} = {};
}
