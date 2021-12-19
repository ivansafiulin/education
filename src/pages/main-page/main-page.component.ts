import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/interfaces/video.interface';
import { videos } from '../../shared/data/video.data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  videos: IVideo[] = JSON.parse(JSON.stringify(videos));

  constructor() { }

  ngOnInit(): void {
  }

  identify(index: number, item: IVideo) { return item.id; }

  onLoadVideo(video: IVideo): void {
    if (video) { video.isLoading = false; }
  }
}
