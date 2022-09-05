import { useEffect, useState } from 'react';

interface IUseLocalStorage {
  key: string;
  defaultValue: string;
}

const getStorageValue = ({ key, defaultValue }: IUseLocalStorage) => {
  const saved = localStorage.getItem(key) || '';
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = ({ key, defaultValue }: IUseLocalStorage) => {
  const [value, setValue] = useState(() => (getStorageValue({ key, defaultValue })));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
