import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router  } from '@angular/router';
import { ScrollTopService } from '../pages/modules/scroll-top/services/scroll-top.service';
import { filter } from 'rxjs/operators';
import { fadeInAnimation } from '../animations/fade-in-animation.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
})
export class AppComponent implements OnInit {
  version = environment.version;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private scrollTopService: ScrollTopService,
  ) {
  }

  ngOnInit() {
    this.document.body.setAttribute('version', this.version);

    this.router.events.pipe(filter(r => r instanceof NavigationEnd)).subscribe(r=>{
      this.scrollTopService.scrollToTop('auto');
    });
  }
}
