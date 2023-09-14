import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SymptomsLabelComponent } from './symptoms-label.component';

describe('SymptomsLabelComponent', () => {
  let component: SymptomsLabelComponent;
  let fixture: ComponentFixture<SymptomsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymptomsLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
