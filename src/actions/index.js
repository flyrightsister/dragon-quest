import axios from 'axios';

export const FETCH_DRAGONS = 'FETCH_DRAGONS';

const ROOT_URL = `https://dragon-game-api.herokuapp.com`;

export function fetchDragons(level) {
  const url = `${ROOT_URL}/dragons/level/${level}`
  const request = axios.get(url);
}

return {
  type: FETCH_DRAGONS,
  payload: request
}
