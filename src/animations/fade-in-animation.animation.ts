import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ]),
    transition('* => *', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ]),
  ]);
