import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/interfaces/video.interface';
import { videos } from '../../shared/data/video.data';
import { IResource } from '../models/interfaces/resource.interface';
import { resources } from '../../shared/data/resources.data';

@Component({
  selector: 'app-thematic-block',
  templateUrl: './thematic-block.component.html',
  styleUrls: ['./thematic-block.component.scss'],
})
export class ThematicBlockComponent implements OnInit {

  resources: IResource[] = JSON.parse(JSON.stringify(resources));
  videos: IVideo[] =  JSON.parse(JSON.stringify(videos));

  constructor() {
  }

  ngOnInit(): void {

  }

  onLoadResource(resource: IResource | IVideo): void {
    if (resource) {
      setTimeout(() => {
        resource.isLoading = false;
      }, 1000);
    }
  }
}
