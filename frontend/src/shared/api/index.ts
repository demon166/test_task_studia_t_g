import axios from 'axios';

export function apiUrl(): string {
  return 'http://localhost:8000/api';
}

export const api = axios.create({
  timeout: 10000,
  baseURL: apiUrl(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
});
