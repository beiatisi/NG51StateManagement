import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCounterComponent } from './change-counter.component';

describe('ChangeCounterComponent', () => {
  let component: ChangeCounterComponent;
  let fixture: ComponentFixture<ChangeCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
