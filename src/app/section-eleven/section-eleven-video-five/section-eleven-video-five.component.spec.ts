import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionElevenVideoFiveComponent } from './section-eleven-video-five.component';

describe('SectionElevenVideoFiveComponent', () => {
  let component: SectionElevenVideoFiveComponent;
  let fixture: ComponentFixture<SectionElevenVideoFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionElevenVideoFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionElevenVideoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
