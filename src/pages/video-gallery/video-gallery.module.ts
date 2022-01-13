import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from './video-gallery.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SafeModule } from '../../shared/safe/safe.module';

@NgModule({
  declarations: [
    VideoGalleryComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SafeModule,
  ],
})
export class VideoGalleryModule {
}
