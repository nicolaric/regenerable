import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffortLabelComponent } from './effort-label.component';

describe('EffortLabelComponent', () => {
  let component: EffortLabelComponent;
  let fixture: ComponentFixture<EffortLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffortLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EffortLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
