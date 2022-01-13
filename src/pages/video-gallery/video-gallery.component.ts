import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/interfaces/video.interface';
import { videos } from '../../shared/data/video.data';
import { fadeInAnimation } from '../../animations/fade-in-animation.animation';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss'],
})
export class VideoGalleryComponent implements OnInit {

  videos: IVideo[] = JSON.parse(JSON.stringify(videos));

  constructor() {
  }

  ngOnInit(): void {
  }

  identify(index: number, item: IVideo) {
    return item.id;
  }

  onLoadVideo(video: IVideo): void {
    if (video) {
      video.isLoading = false;
    }
  }
}
