import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaOfLifeLabelComponent } from './area-of-life-label.component';

describe('AreaOfLifeLabelComponent', () => {
  let component: AreaOfLifeLabelComponent;
  let fixture: ComponentFixture<AreaOfLifeLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaOfLifeLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaOfLifeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
