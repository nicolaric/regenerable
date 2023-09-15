import { Injectable, inject } from '@angular/core';
import { Identify, identify, init, setSessionId, track } from '@amplitude/analytics-browser';
import { environment } from 'src/environments/environment';
import { SALT } from './salt.provider';

@Injectable({
  providedIn: 'root'
})
export class AmplitudeService {
  private salt: string = inject(SALT);

  constructor() {
    this.initAmplitude();
  }
  
  async logEvent(
    event: string,
    props?: Record<string, unknown>,
  ): Promise<void> {
    // skip if amplitude is disabled
    if (!environment.amplitude.enable) return;

    track(event, props);
  }

  private initAmplitude(): void {
    if (!environment.amplitude.enable) return;

    init(environment.amplitude.apiKey, this.salt, {
      identityStorage: 'localStorage',
      trackingOptions: {
        ipAddress: false,
      },
      defaultTracking: {
        pageViews: {
          trackHistoryChanges: 'all',
        },
      },
    });

    // see actions user did in one flow on the website
    setSessionId(Date.now());

    const id = new Identify();
    id.setOnce('environment', environment.name);
    identify(id);
  }
}
