import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSevenVideoThreeComponent } from './section-seven-video-three.component';

describe('SectionSevenVideoThreeComponent', () => {
  let component: SectionSevenVideoThreeComponent;
  let fixture: ComponentFixture<SectionSevenVideoThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSevenVideoThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSevenVideoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
