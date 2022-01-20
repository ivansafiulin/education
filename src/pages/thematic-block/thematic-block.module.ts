import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThematicBlockComponent } from './thematic-block.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SafeModule } from '../../shared/safe/safe.module';

@NgModule({
  declarations: [
    ThematicBlockComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SafeModule,
  ],
})
export class ThematicBlockModule {
}
