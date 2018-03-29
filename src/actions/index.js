import axios from 'axios';

export const GET_RANDOM_DRAGON = 'GET_RANDOM_DRAGON';
export const ADD_DRAGON = 'ADD_DRAGON';
export const ENTER_FIGHT = 'ENTER_FIGHT';
export const FIGHTING_DRAGON = 'FIGHTING_DRAGON';
export const SPAWN_HUMAN = 'SPAWN_HUMAN';
export const SAVE_NEW_HUMAN = 'SAVE_NEW_HUMAN';

// const ROOT_URL = `https://dragon-game-api.herokuapp.com`;
const ROOT_URL = 'http://localhost:3001';

export function getRandomDragon(level) {
  const url = `${ROOT_URL}/dragons/random/${level}`;
  const request = axios.get(url);

  return {
    type: GET_RANDOM_DRAGON,
    payload: request,
  }
}

export function addToUserDragons(dragon) {
  return {
    type: ADD_DRAGON,
    payload: dragon,
  }
}

export function enterFightMode(dragon) {
  return {
      type: FIGHTING_DRAGON,
      payload: dragon,
    }
}

export function callHuman(id) {
  const url = `${ROOT_URL}/humans/${id}`;
  const request = axios.get(url);
  return {
    type: SPAWN_HUMAN,
    payload: request,
  }
}

export function saveHuman(human) {
  return {
    type: SAVE_NEW_HUMAN,
    payload: human,
  }
}
