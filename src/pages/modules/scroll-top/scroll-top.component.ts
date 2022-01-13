import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollTopService } from './services/scroll-top.service';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  isVisibleScrollBtn: boolean = false;

  constructor(private scrollTopService: ScrollTopService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(s: any) {
    const targetHtmlElement: HTMLElement = s.target.scrollingElement;
    this.isVisibleScrollBtn =
      targetHtmlElement.scrollHeight > targetHtmlElement.clientHeight
      && targetHtmlElement.scrollHeight > 100
  }

  ngOnInit(): void {}

  scrollTop(): void {
    this.scrollTopService.scrollToTop();
  }
}
