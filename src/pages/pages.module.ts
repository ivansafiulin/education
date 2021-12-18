import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class PagesModule { }
