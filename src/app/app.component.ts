import { Component, Inject } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ScrollTopService } from '../pages/modules/scroll-top/services/scroll-top.service';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = environment.version;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private scrollTopService: ScrollTopService,
  ) {
  }

  ngOnInit() {
    this.document.body.setAttribute('version', this.version);

    this.router.events.pipe(filter(r => r instanceof NavigationStart)).subscribe(r=>{
      this.scrollTopService.scrollToTop();
    });
  }
}
