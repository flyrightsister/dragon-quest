import { GET_RANDOM_DRAGON } from '../actions';

export default function(state={}, action) {
  switch(action.type) {
    case GET_RANDOM_DRAGON:
      return action.payload.data.randomDragon
    default: return state;
  }
}
