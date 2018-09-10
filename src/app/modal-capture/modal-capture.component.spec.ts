import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCaptureComponent } from './modal-capture.component';

describe('ModalCaptureComponent', () => {
  let component: ModalCaptureComponent;
  let fixture: ComponentFixture<ModalCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
