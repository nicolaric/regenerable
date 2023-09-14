import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ExperimentsComponent } from './experiments/experiments.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AmplifyAuthenticatorModule, ExperimentsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'regenerable';
}
