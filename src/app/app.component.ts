import { Component, Inject } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = environment.version;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit() {
    this.document.body.setAttribute('version', this.version);
  }
}
