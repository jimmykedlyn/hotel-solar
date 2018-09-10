import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPlayerTwoComponent } from './carousel-player-two.component';

describe('CarouselPlayerTwoComponent', () => {
  let component: CarouselPlayerTwoComponent;
  let fixture: ComponentFixture<CarouselPlayerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPlayerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPlayerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
