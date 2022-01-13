import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollTopService {

  constructor() {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
