import { Component } from '@angular/core';
import { group, animate, query, transition, style, trigger } from '@angular/animations';

@Component({
  selector: 'hs-section-fourteen',
  templateUrl: './section-fourteen.component.html',
  styleUrls: ['./section-fourteen.component.scss'],
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
export class SectionFourteenComponent {
  backingItems = [
    {imagem: 'assets/img/hs-caiaque.png', title: 'Caiaque' },
    {imagem: 'assets/img/hs-banana.png', title: 'Banana Boat' },
    {imagem: 'assets/img/hs-stand.png', title: 'Stand up Paddle'},
    {imagem: 'assets/img/hs-barco.png', title: 'Passeio de Barco'},

  ];
  actualIndex = 0;
  selectedIndex = 0;

  get items() {
    return [this.backingItems[this.actualIndex]];
  }
}
