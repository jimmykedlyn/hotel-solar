import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFiveVideoTwoComponent } from './section-five-video-two.component';

describe('SectionFiveVideoTwoComponent', () => {
  let component: SectionFiveVideoTwoComponent;
  let fixture: ComponentFixture<SectionFiveVideoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFiveVideoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFiveVideoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
