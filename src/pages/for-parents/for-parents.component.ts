import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/interfaces/video.interface';

@Component({
  selector: 'app-for-parents',
  templateUrl: './for-parents.component.html',
  styleUrls: ['./for-parents.component.scss'],
})
export class ForParentsComponent implements OnInit {

  video: IVideo = { id: 5, src: 'https://www.youtube.com/watch?v=5UYmXf8wAJI', isLoading: true }

  constructor() {}

  ngOnInit(): void {
  }

  onLoadVideo(resource: IVideo): void {
    if (resource) {
      setTimeout(() => {
        resource.isLoading = false;
      }, 1000);
    }
  }
}
