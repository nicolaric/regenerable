import { InjectionToken, Provider } from '@angular/core';
import { isStorageSupported } from './is-supported';

/** =============== CORE_STORAGE =============== **/

/**
 * Injects a WhatWG compliant localStorage object, creating a memory
 * storage when localStorage is not supported by the platform
 */
export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'LOCAL_STORAGE',
  {
    providedIn: 'root',
    factory: () => window.localStorage
  },
);

/**
 * Injects a WhatWG compliant localStorage object, creating a memory
 * storage when sessionStorage is not supported by the platform
 */
export const SESSION_STORAGE = new InjectionToken<Storage>(
  'SESSION_STORAGE',
  {
    providedIn: 'root',
    factory: () => window.sessionStorage
  },
);

/** =============== STORAGE_OPTIONS =============== **/

export const STORAGE_OPTIONS = new InjectionToken('STORAGE_OPTIONS');

/**
 * `StorageService` supports clearing only transient keys, or clearing the whole namespace
 */
export interface StorageKeys {
  transient?: string[];
  persistent?: string[];
}

export interface StorageOptions {
  namespace: string;
  storageKeys?: StorageKeys;
}

/**
 * Storage options used to namespace each angular module, so the `StorageService`
 * is scoped to each module
 */
export function storageOptionsProvider({
  namespace,
  storageKeys,
}: StorageOptions): Provider {
  const persisted = storageKeys?.persistent ?? [];
  const transient = storageKeys?.transient ?? [];
  if (persisted.some((p) => transient.includes(p))) {
    throw new Error(
      [
        'A storage key can not be defined as persistent and transient at the same time.',
        `persistent: ${persisted.join()}`,
        `transient: ${transient.join()}`,
      ].join('\n'),
    );
  }
  return {
    provide: STORAGE_OPTIONS,
    useValue: { namespace, storageKeys },
  };
}
