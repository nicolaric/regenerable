import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaOfLife, AreaOfLifeType } from 'src/app/API.service';
import { AreaOfLifeMapping } from './area-of-life-mapping';

@Component({
  selector: 'app-area-of-life-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-of-life-label.component.html',
  styleUrls: ['./area-of-life-label.component.scss'],
})
export class AreaOfLifeLabelComponent {
  @Input({required: true})
  areaOfLife?: AreaOfLifeType;

  AreaOfLifeMapping = AreaOfLifeMapping;

  getTextOfArea(area: AreaOfLifeType): string {
    return this.AreaOfLifeMapping[AreaOfLife[area]];
  }
}
