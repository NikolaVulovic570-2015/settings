import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingAreaComponent } from './operating-area.component';

describe('OperatingAreaComponent', () => {
  let component: OperatingAreaComponent;
  let fixture: ComponentFixture<OperatingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
