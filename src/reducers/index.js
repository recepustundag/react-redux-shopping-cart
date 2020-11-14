import { combineReducers } from 'redux';
import CardReducer from './CardReducer';

const rootReducer = combineReducers({
  cartState : CardReducer,
});

export default rootReducer