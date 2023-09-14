import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitLabelComponent } from './habit-label.component';

describe('HabitLabelComponent', () => {
  let component: HabitLabelComponent;
  let fixture: ComponentFixture<HabitLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HabitLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
