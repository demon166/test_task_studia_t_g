import axios from 'axios';

export function apiUrl(): string {
  return '/api';
}

export const api = axios.create({
  timeout: 10000,
  baseURL: apiUrl(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
});
