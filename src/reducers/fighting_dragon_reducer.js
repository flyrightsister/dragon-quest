import { FIGHTING_DRAGON } from '../actions';

export default function(state={}, action) {
  switch(action.type) {
    case FIGHTING_DRAGON:
      return action.payload
    default: return state
  }
}
