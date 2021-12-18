import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';

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
  ],
})
export class PagesModule { }
