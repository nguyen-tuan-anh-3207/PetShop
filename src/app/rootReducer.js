import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import userReducer from '../reducers/user/api';
import cartReducer from '../reducers/cart/api';
import homeReducer from '../reducers/home/api';
import categoryReducer from '../reducers/category/api';

const history = createBrowserHistory();

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token']
};

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart']
};

export const rootReducer = {
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  home: homeReducer,
  category: categoryReducer,
  router: connectRouter(history)
};
