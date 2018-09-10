import { Component, OnInit } from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'hs-section-fifteen',
  templateUrl: './section-fifteen.component.html',
  styleUrls: ['./section-fifteen.component.scss'],
  animations: [
    trigger('bannerAnimation', [
      transition(':increment', group([
        query(':enter', [
          style({ left: '100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '-100%' }))
        ])
      ])),
      transition(':decrement', group([
        query(':enter', [
          style({ left: '-100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '100%' }))
        ])
      ])),
    ])
  ]
})
export class SectionFifteenComponent {
  backingItems = [
    {imagem: 'assets/img/hs-family-1.png', title: 'Para Família' },
    {imagem: 'assets/img/hs-family-1.png', title: 'Para Família' }
  ];
  actualIndex = 0;
  selectedIndex = 0;

  get items() {
    return [this.backingItems[this.actualIndex]];
  }
}
