import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressedSymptomType } from 'src/app/API.service';

@Component({
  selector: 'app-symptoms-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './symptoms-label.component.html',
  styleUrls: ['./symptoms-label.component.scss'],
})
export class SymptomsLabelComponent {
  @Input({required: true})
  addressedSymptom?: AddressedSymptomType;
}
