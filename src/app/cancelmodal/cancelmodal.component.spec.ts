import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelmodalComponent } from './cancelmodal.component';

describe('CancelmodalComponent', () => {
  let component: CancelmodalComponent;
  let fixture: ComponentFixture<CancelmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
