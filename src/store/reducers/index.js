import { NomeReducer,IdReducer } from './clickReducer';

import { combineReducers } from 'redux';

const Reducers = combineReducers({
  NomeLogin: NomeReducer,
  IdLogin:IdReducer,
})

export default Reducers