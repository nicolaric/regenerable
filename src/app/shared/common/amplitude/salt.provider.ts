import { InjectionToken, inject } from '@angular/core';
import { LocalStorageKeys, RegenerableLocalStorage } from '../../storage/local-storage.provider';

export const SALT = new InjectionToken<string>('SALT', {
  providedIn: 'root',
  factory: () => {
    const localStorage = inject(RegenerableLocalStorage);
    let salt = localStorage.get<string>(LocalStorageKeys.Salt);

    const toHex = (bytes: Uint8Array) =>
      Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');

    const getRandomBytes = (len: number) => {
      const bytes = new Uint8Array(len);
      crypto.getRandomValues(bytes);
      return bytes;
    }

    // creates salt when not found
    if (!salt) {
      salt = toHex(getRandomBytes(16));
      localStorage.set(LocalStorageKeys.Salt, salt);
    }
    return salt;
  },
});
