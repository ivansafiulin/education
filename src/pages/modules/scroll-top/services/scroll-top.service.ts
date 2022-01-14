import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollTopService {

  constructor() {}

  scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    window.scrollTo({ top: 0, behavior: behavior });
  }
}
