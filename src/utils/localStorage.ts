/**
 * Salva um valor no localStorage.
 */
export const setLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Recupera um valor do localStorage.
 */
export const getLocalStorage = <T = unknown>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};
