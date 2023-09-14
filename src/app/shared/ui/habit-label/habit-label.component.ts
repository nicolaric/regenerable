import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitType } from 'src/app/API.service';

@Component({
  selector: 'app-habit-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habit-label.component.html',
  styleUrls: ['./habit-label.component.scss'],
})
export class HabitLabelComponent {
  @Input({required: true})
  habit?: HabitType
}
