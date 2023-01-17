import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RpmComponent } from './rpm.component';

describe('RpmComponent', () => {
  let component: RpmComponent;
  let fixture: ComponentFixture<RpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
