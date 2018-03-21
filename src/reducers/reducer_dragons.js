import { ADD_DRAGON } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_DRAGON:
      return [...state, action.payload];
    default:
      return state;
  }
}
