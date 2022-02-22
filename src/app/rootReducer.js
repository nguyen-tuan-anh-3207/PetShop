import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import userReducer from '../reducers/user/api';
import cartReducer from '../reducers/cart/api';

const history = createBrowserHistory();

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token']
};

export const rootReducer = {
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer,
  router: connectRouter(history)
};
