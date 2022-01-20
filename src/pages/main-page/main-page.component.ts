import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/interfaces/video.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  videoOne: IVideo = {
    id: 4,
    src: 'https://www.youtube.com/watch?v=do5p5ynpzF0',
    isLoading: true,
    isMain: true
  };

  videoTwo: IVideo = {
    id: 4,
    src: 'https://www.youtube.com/watch?v=b01KTadJTBI',
    isLoading: true,
    isMain: false,
  }

  constructor() { }

  ngOnInit(): void {}


  onLoadVideo(video: IVideo | undefined): void {
    if (video) {
      setTimeout(() => {
        video.isLoading = false;
      }, 1000);
    }
  }
}
