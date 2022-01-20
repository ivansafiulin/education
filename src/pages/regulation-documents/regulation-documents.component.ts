import { Component, OnInit } from '@angular/core';
import { ILink } from '../../models/interfaces/link.interface';

@Component({
  selector: 'app-regulation-documents',
  templateUrl: './regulation-documents.component.html',
  styleUrls: ['../useful-links/useful-links.component.scss', './regulation-documents.component.scss'],
})
export class RegulationDocumentsComponent implements OnInit {

  links: ReadonlyArray<ILink> = [
    {name: 'Базовий Компонент Дошкільної Освіти', link: 'https://ezavdnz.mcfr.ua/book?bid=37876'},
    {
      name: 'Освітня програма "Дитина": програма Tip Top English',
      link: 'https://drive.google.com/file/d/1D6GYdZT6JdsfuRagVb0jmvUmfw14XisF/view',
    },
    {
      name: 'Т. Шкваріна "Англійська мова для дітей дошкільного віку"',
      link: 'https://drive.google.com/file/d/1PB7eppWuzQFfgkFR0gZVOafX_D8tjfSR/view',
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
