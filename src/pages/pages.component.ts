import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation.animation';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

