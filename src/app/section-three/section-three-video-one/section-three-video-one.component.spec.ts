import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeVideoOneComponent } from './section-three-video-one.component';

describe('SectionThreeVideoOneComponent', () => {
  let component: SectionThreeVideoOneComponent;
  let fixture: ComponentFixture<SectionThreeVideoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeVideoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeVideoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
