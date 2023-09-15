import { inject } from "@angular/core";
import { StorageKeysType, StorageService } from "./storage.service";
import { LOCAL_STORAGE, StorageOptions } from "./storage.provider";

/**
 * @usage
 * ```
 * const ConnectStorageKeys = {} as const;
 *
 * // provides strongly typed keys
 * type ConnectLocalStorageType = LocalStorage<typeof ConnectStorageKeys>;
 *
 * // provides the namespaced local storage in the whole application
 * // without the need for modules
 * export ConnectLocalStorage = new InjectionToken<ConnectLocalStorageType>(
 *   'ConnectLocalStorage',
 *   {
 *     providedIn: 'root',
 *     factory() {
 *       return new LocalStorage('connect', {
 *         persisted: Object.values(ConnectStorageKeys),
 *       });
 *     }
 *   }
 * );
 * ```
 */
export class LocalStorage<
  Keys extends StorageKeysType,
> extends StorageService<Keys> {
  private _storage = inject(LOCAL_STORAGE);

  constructor(private _options: StorageOptions) {
    super();
  }

  storage(): Storage {
    return this._storage;
  }
  options(): StorageOptions {
    return this._options;
  }
}