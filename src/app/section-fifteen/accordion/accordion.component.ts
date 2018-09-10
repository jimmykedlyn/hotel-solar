import { Component } from '@angular/core';


@Component({
  selector: 'hs-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  items = [{
    id: 1,
    name: 'First',
    description: 'First accordion'
  }, {
    id: 2,
    name: 'Second',
    description: 'Second accordion'
  }, {
    id: 3,
    name: 'Third',
    description: 'Third accordion'
  }];
}
