import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsAndChildsComponent } from './parents-and-childs.component';
import { SafeModule } from '../../shared/safe/safe.module';


@NgModule({
  declarations: [
    ParentsAndChildsComponent,
  ],
  imports: [
    CommonModule,
    SafeModule,
  ],
})
export class ParentsAndChildsModule {
}
