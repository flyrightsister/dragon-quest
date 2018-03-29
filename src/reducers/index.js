import { combineReducers } from 'redux';
import DragonsReducer from './reducer_dragons';
import RandomDragonReducer from './reducer_random_dragon';
import EnterFightModeReducer from './enter_fight_reducer';
import FightingDragonReducer from './fighting_dragon_reducer';
import HumanReducer from './human_reducer';

const rootReducer = combineReducers({
  dragons: DragonsReducer,
  randomDragon: RandomDragonReducer,
  fightMode: EnterFightModeReducer,
  fightingDragon: FightingDragonReducer,
  human: HumanReducer,
});

export default rootReducer;
