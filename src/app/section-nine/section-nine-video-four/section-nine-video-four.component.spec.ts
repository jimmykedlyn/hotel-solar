import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNineVideoFourComponent } from './section-nine-video-four.component';

describe('SectionNineVideoFourComponent', () => {
  let component: SectionNineVideoFourComponent;
  let fixture: ComponentFixture<SectionNineVideoFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNineVideoFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNineVideoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
