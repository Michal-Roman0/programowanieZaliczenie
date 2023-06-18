import { Component } from '@angular/core';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  savedEmail?: string;

  constructor(private newsletterService : NewsletterService){}

  addEmail(email: string): void{
    this.savedEmail = email;
    this.newsletterService.addEmail(email);
  }
}
