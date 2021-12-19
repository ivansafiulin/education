import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from './scroll-top.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ScrollTopComponent,
  ],
  exports: [
    ScrollTopComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
})
export class ScrollTopModule { }
