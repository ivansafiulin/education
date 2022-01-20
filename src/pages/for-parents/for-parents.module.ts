import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForParentsComponent } from './for-parents.component';
import { SafeModule } from '../../shared/safe/safe.module';


@NgModule({
  declarations: [
    ForParentsComponent,
  ],
  imports: [
    CommonModule,
    SafeModule,
  ],
})
export class ForParentsModule {
}
