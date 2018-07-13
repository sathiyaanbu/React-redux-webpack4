import { combineReducers } from 'redux';
import TableReducer from './reducer_table';

const rootReducer = combineReducers({
  results: TableReducer
});

export default rootReducer;
