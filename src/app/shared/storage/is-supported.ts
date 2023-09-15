const testKey = '__test_storage_support__';
const testValue = '@@test';

export function isStorageSupported(type: 'local' | 'session'): boolean {
  try {
    const storage =
      type === 'session' ? window.sessionStorage : window.localStorage;
    storage.setItem(testKey, testValue);

    if (storage.getItem(testKey) !== testValue) {
      return false;
    }

    storage.removeItem(testKey);
    return true;
  } catch (err) {
    return false;
  }
}
