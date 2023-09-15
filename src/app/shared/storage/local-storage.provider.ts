import { InjectionToken } from '@angular/core';
import { LocalStorage } from './storage';

export const LocalStorageKeys = {
  Salt: 'salt.v1',
} as const;

const namespace = 'regenerable'

export const RegenerableLocalStorage = new InjectionToken<LocalStorage<typeof LocalStorageKeys>>(
  'RegenerableLocalStorage',
  {
    providedIn: 'root',
    factory() {
      return new LocalStorage({
        namespace,
        storageKeys: {
          persistent: Object.values(LocalStorageKeys),
        },
      });
    },
  }
);
