import { SPAWN_HUMAN, SAVE_NEW_HUMAN } from '../actions';

export default function (state={}, action) {
  switch(action.type) {
    case SPAWN_HUMAN:
      return action.payload.data.human
    case SAVE_NEW_HUMAN:
      return action.payload
    default: return state;
  }
}
