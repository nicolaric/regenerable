
import { EnumType } from '../utilities';
import { StorageOptions } from './storage.provider';

export type StorageKeysType = Readonly<Record<string, string>>;

export abstract class StorageService<
  Keys extends StorageKeysType,
  KeyType = EnumType<Keys>,
> {
  abstract storage(): Storage;
  abstract options(): StorageOptions;

  /**
   * Returns the value associated to the specified key.
   * If the storage is not available an in-memory solution will be used.
   */
  get<T = unknown>(key: KeyType): T | undefined {
    this.ensureKeyIsRegistered(key);
    const namespaced = this.formatKey(key);
    const rawData = this.storage().getItem(namespaced);

    // Try to parse the data.
    let parsedData: T | undefined;

    // Only parse the data when it is not null.
    if (rawData !== null) {
      try {
        parsedData = JSON.parse(rawData);
      } catch (error) {
        throw new Error(
          'The raw data cannot be parsed; Invalid data in the storage.',
        );
      }
    }
    return parsedData;
  }

  /**
   * Associates a value to the specified key
   *
   * @param key The token that is associated with the given value.
   * @param data The value that will be set in the storage.
   */
  set<T = unknown>(key: KeyType, data: T): void {
    this.ensureKeyIsRegistered(key);
    const namespaced = this.formatKey(key);
    if (data === undefined) {
      this.storage().removeItem(namespaced);
      return;
    }
    const rawData = JSON.stringify(data);
    this.storage().setItem(namespaced, rawData);
  }

  /**
   * Updates the value associated to the specified token
   *
   * @param key The token that is associated to a given value.
   */
  update<T = unknown>(key: KeyType, updateFn: (data?: T) => T): void {
    this.ensureKeyIsRegistered(key);
    const data = this.get<T>(key);
    const updated = updateFn(data);
    this.set<T>(key, updated);
  }

  /**
   * Removes the value associated to the specified token
   *
   * @param key The token that is associated to a given value.
   */
  remove(key: KeyType): void {
    this.ensureKeyIsRegistered(key);
    const namespaced = this.formatKey(key);
    // Remove the item from the storage
    this.storage().removeItem(namespaced);
  }

  /**
   * Removes all transient key-value pairs from the namespace.
   */
  clear(): void {
    Object.keys(this.storage())
      .filter((k) => k.startsWith(this.namespace()))
      .filter((k) => !this.persistentKeys().includes(k))
      .forEach((k) => {
        this.storage().removeItem(k);
      });
  }

  /**
   * Removes all key-value pairs in the namespace, including persistent keys.
   */
  trash(): void {
    Object.keys(this.storage())
      .filter((k) => k.startsWith(this.namespace()))
      .forEach((k) => {
        this.storage().removeItem(k);
      });
  }

  private ensureKeyIsRegistered(key: KeyType): void {
    if (!this.allKeys().includes(this.formatKey(key))) {
      const message =
        `Storage key "${key}" not found!\n` +
        'Make sure to register all keys in your module using StorageModule.register(...).';
      throw new Error(message);
    }
  }

  private transientKeys(): string[] {
    const transient = this.options().storageKeys?.transient ?? [];
    return transient.map((key) => this.formatKey(key));
  }

  private persistentKeys(): string[] {
    const persistent = this.options().storageKeys?.persistent ?? [];
    return persistent.map((key) => this.formatKey(key));
  }

  private allKeys(): string[] {
    return [...this.persistentKeys(), ...this.transientKeys()];
  }

  private formatKey(key: KeyType | string): string {
    return `${this.namespace()}::${key}`;
  }

  private namespace(): string {
    return `nxx::${this.options().namespace}`;
  }
}
