import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import userReducer from './reducer/user';
import productReducer from './reducer/product';

const rootReducer = combineReducers({
	auth: userReducer,
	product: productReducer
  });
  
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;