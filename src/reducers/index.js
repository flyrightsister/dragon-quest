import { combineReducers } from 'redux';
import DragonsReducer from './reducer_dragons';
import RandomDragonReducer from './reducer_random_dragon';

const rootReducer = combineReducers({
  dragons: DragonsReducer,
  randomDragon: RandomDragonReducer,
});

export default rootReducer;
