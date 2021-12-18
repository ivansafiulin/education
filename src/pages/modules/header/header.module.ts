import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
	imports: [
		CommonModule,
		RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
	],
  exports: [HeaderComponent]
})
export class HeaderModule { }
