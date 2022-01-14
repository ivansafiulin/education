import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: MainPageComponent, data: { animation: 'main-page' } },
      { path: '/video-gallery', component: VideoGalleryComponent, data: { animation: 'video-gallery-page' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
