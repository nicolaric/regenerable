import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffortType } from 'src/app/API.service';

@Component({
  selector: 'app-effort-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './effort-label.component.html',
  styleUrls: ['./effort-label.component.scss'],
})
export class EffortLabelComponent {
  @Input({required: true})
  effort?: EffortType;
}
