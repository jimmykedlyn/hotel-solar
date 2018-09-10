import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss']
})
export class SectionFooterComponent {
  currentDate: number = Date.now();
}
