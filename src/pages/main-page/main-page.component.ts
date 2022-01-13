import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/interfaces/video.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  video: IVideo = {
    id: 4,
    src: 'https://www.youtube.com/watch?v=do5p5ynpzF0',
    isLoading: true,
    isMain: true
  };

  constructor() { }

  ngOnInit(): void {}


  onLoadVideo(video: IVideo | undefined): void {
    if (video) { video.isLoading = false; }
  }
}
