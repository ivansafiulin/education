import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit, AfterViewInit {

  headerElement: HTMLElement | null = null;
  isVisibleScrollBtn: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(s: any) {
    const targetHtmlElement: HTMLElement = s.target.scrollingElement;
    this.isVisibleScrollBtn =
      targetHtmlElement.scrollHeight > targetHtmlElement.clientHeight
      && targetHtmlElement.scrollTop > 0.3 * (targetHtmlElement.scrollHeight - targetHtmlElement.clientHeight);
  }

  ngOnInit(): void {}

  private setHeaderElement(): void {
    this.headerElement = (document.getElementById('header') as HTMLElement);
  }

  scrollTop(): void {
    if (this.headerElement) { this.headerElement.scrollIntoView({ behavior: 'smooth' }); }
  }

  ngAfterViewInit(): void {
    this.setHeaderElement();
  }
}
