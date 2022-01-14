import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { MainPageModule } from './main-page/main-page.module';
import { ScrollTopModule } from './modules/scroll-top/scroll-top.module';
import { VideoGalleryModule } from './video-gallery/video-gallery.module';
import { ParentsAndChildsModule } from './parents-and-childs/parents-and-childs.module';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { UsefulLinksModule } from './useful-links/useful-links.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ScrollTopModule,
    MatIconModule,
    MatIconModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule,
    MainPageModule,
    VideoGalleryModule,
    ParentsAndChildsModule,
    UsefulLinksModule,
  ],
})
export class PagesModule { }
