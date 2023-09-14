import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService, ListExperimentsQuery } from '../API.service';
import { RouterModule } from '@angular/router';
import { EffortLabelComponent } from '../shared/ui/effort-label/effort-label.component';

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [CommonModule, RouterModule, EffortLabelComponent],
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss'],
})
export class ExperimentsComponent {
  private api = inject(APIService);
  experiments = this.api.ListExperiments();
}
