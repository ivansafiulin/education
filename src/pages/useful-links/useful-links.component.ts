import { Component, OnInit } from '@angular/core';
import { ILink } from '../../models/interfaces/link.interface';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit {

  linksResource: ReadonlyArray<ILink> = [
    { name: 'LearnEnglish Kids', link: 'https://learnenglishkids.britishcouncil.org/' },
    {
      name: 'Порадник батька від British Council',
      link: 'https://learnenglishkids.britishcouncil.org/sites/kids/files/attachment/parents-articles-speaking-english-at-home-ukrainian.pdf'
    },
    { name: 'Word games з LearnEnglish Kids', link: 'https://learnenglishkids.britishcouncil.org/word-games' },
    { name: 'Sounds and Speak з LearnEnglish Kids', link: 'https://learnenglishkids.britishcouncil.org/speak-spell' },
    {
      name: 'Games and social media від Сambridgeenglish ',
      link: 'https://www.cambridgeenglish.org/learning-english/games-social/'
    },
    {
      name: 'Activities for children від Сambridgeenglish',
      link: 'https://www.cambridgeenglish.org/learning-english/parents-and-children/activities-for-children/'
    },
    { name: 'Мультфильм Muzzy in Gondoland : телеканал BBC ', link: 'https://fenglish.ru/muzzy-in-gondoland-1-seriya/' },
    { name: 'CBeebies', link: 'https://global.cbeebies.com/' },
    { name: 'englishclub.com ', link: 'https://www.englishclub.com/' },
  ];

  linksApp: ReadonlyArray<ILink> = [
    { name: 'Mondly', link: 'https://play.google.com/store/apps/details?id=com.atistudios.ispeak.en' },
    { name: 'Lingokids - kids playlearning', link: 'https://play.google.com/store/apps/details?id=es.monkimun.lingokids&hl=uk' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
