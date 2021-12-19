import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SafeModule } from '../../shared/safe/safe.module';

@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SafeModule,
  ],
})
export class MainPageModule { }
