import {AfterViewInit, Component} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'hs-section-nine',
  templateUrl: './section-nine.component.html',
  styleUrls: ['./section-nine.component.scss']
})
export class SectionNineComponent implements AfterViewInit {
  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }
  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupOne');
  }

}
