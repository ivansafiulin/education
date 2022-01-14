import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { ParentsAndChildsComponent } from './parents-and-childs/parents-and-childs.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: MainPageComponent, data: { animation: 'MainPage' } },
      { path: 'video-gallery', component: VideoGalleryComponent, data: { animation: 'VideoGallery' } },
      { path: 'parents-and-childs', component: ParentsAndChildsComponent, data: {animation: 'ParentsAndChilds' }},
      { path: 'useful-links', component: UsefulLinksComponent, data: {animation: 'UsefulLinks' }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
