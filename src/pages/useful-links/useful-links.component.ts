import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit {

  links: ReadonlyArray<ILink> = [
    { name: 'LearningApps', link: 'https://learningapps.org/' },
    { name: 'Anki', link: 'https://apps.ankiweb.net/' },
    { name: 'Hot Potatoes', link: 'https://hotpot.uvic.ca/' },
    { name: 'British council', link: 'https://learnenglish.britishcouncil.org/' },
    { name: 'Quizlet', link: 'https://quizlet.com/latest' },
    { name: 'Cbeebies', link: 'https://global.cbeebies.com/' },
    { name: 'Cambridge Assessment English', link: 'https://cambridgeenglishonline.org/' },
    { name: 'Toondoo', link: 'http://toondoo.com/' },
    { name: 'MindMup', link: 'https://www.mindmup.com/' },
    { name: 'Mindmeister', link: 'https://www.mindmeister.com/ru' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface ILink {
  name: string;
  link: string;
}
