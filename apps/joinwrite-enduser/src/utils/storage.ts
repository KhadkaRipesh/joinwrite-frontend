export function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem<T>(key: string) {
  const value = localStorage.getItem(key) || '';
  try {
    return JSON.stringify(value) as T;
  } catch {
    return null;
  }
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}
