import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThematicBlockComponent } from './thematic-block.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SafeModule } from '../../shared/safe/safe.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ThematicBlockComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SafeModule,
    MatTooltipModule,
  ],
})
export class ThematicBlockModule {
}
