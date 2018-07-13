import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
  const request = axios.get('https://rickandmortyapi.com/api/character');
  return {
    type: FETCH_DATA,
    payload: request
  };
}
