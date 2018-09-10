import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPlayerComponent } from './carousel-player.component';

describe('CarouselPlayerComponent', () => {
  let component: CarouselPlayerComponent;
  let fixture: ComponentFixture<CarouselPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
