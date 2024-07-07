type LocalStorageKey = (typeof LOCAL_STORAGE_KEY)[keyof typeof LOCAL_STORAGE_KEY];

export const LOCAL_STORAGE_KEY = {
  accessToken: 'acst',
} as const;

export class Storage {
  static getItem(key: LocalStorageKey) {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  static setItem(key: LocalStorageKey, value: string) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, value);
  }
}
