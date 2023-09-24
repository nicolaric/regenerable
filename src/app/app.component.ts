import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ExperimentsComponent } from './experiments/experiments.component';
import { Analytics } from 'aws-amplify';
import { HeaderComponent } from './header/header.component';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AmplifyAuthenticatorModule, ExperimentsComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'regenerable';
  constructor() {
    Analytics.record({ name: 'appStart' });
  }
}
