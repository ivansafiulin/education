import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { MainPageModule } from './main-page/main-page.module';
import { ScrollTopModule } from './modules/scroll-top/scroll-top.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule,
    MatIconModule,
    MatIconModule,
    MainPageModule,
    ScrollTopModule,
  ],
})
export class PagesModule { }
