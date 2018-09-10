import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

  constructor() { }
  title_main: String = 'AMOR DE VERÃO 4ª EDIÇÃO';

  ngOnInit() {
  }

}
