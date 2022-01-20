import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { MainPageModule } from './main-page/main-page.module';
import { ScrollTopModule } from './modules/scroll-top/scroll-top.module';
import { ThematicBlockModule } from './thematic-block/thematic-block.module';
import { ForParentsModule } from './for-parents/for-parents.module';
import { UsefulLinksModule } from './useful-links/useful-links.module';
import { RegulationDocumentsModule } from './regulation-documents/regulation-documents.module';

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
    ThematicBlockModule,
    ForParentsModule,
    UsefulLinksModule,
    RegulationDocumentsModule,
  ],
})
export class PagesModule { }
