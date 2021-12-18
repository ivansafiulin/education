import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  videos: string[] = [
    'https://www.youtube.com/embed/1ozGKlOzEVc',
    'https://www.youtube.com/embed/1ozGKlOzEVc',
    'https://www.youtube.com/embed/1ozGKlOzEVc',
    'https://www.youtube.com/embed/1ozGKlOzEVc',
    'https://www.youtube.com/embed/1ozGKlOzEVc',
    'https://www.youtube.com/embed/1ozGKlOzEVc',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
