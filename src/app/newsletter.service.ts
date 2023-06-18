import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor() { }

  savedEmails: string[] = [];

  addEmail(email: string): void{
    this.savedEmails.push(email);
  }

  sendNewsletter(): void{
    // Mechanika wysylania newslettera na mail
  }
}
