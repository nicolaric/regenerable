import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { AreaOfLifeLabelComponent } from 'src/app/shared/ui/area-of-life-label/area-of-life-label.component';
import { EffortLabelComponent } from 'src/app/shared/ui/effort-label/effort-label.component';
import { HabitLabelComponent } from 'src/app/shared/ui/habit-label/habit-label.component';
import { SymptomsLabelComponent } from 'src/app/shared/ui/symptoms-label/symptoms-label.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    AreaOfLifeLabelComponent,
    EffortLabelComponent,
    HabitLabelComponent,
    SymptomsLabelComponent,
  ],
  templateUrl: './experiments-details.component.html',
  styleUrls: ['./experiments-details.component.scss'],
})
export class ExperimentsDetailsComponent {
  private route = inject(ActivatedRoute);
  private id = this.route.snapshot.params['id'];
  private api = inject(APIService);
  experiment$ = this.api.GetExperiment(this.id);
}
