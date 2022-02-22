import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload) {
        const idProductAction = action.payload.id;
        const index = state.cart ? state.cart.map((item) => item?.id).indexOf(idProductAction) : -1;
        if (index !== -1) {
          state.cart[index].quantity += 1;
        } else {
          state.cart = [action.payload, ...state.cart];
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeCart: (state, action) => {
      // const cartRemove = state.cart.find((cart) => cart.id === action.payload);
      // console.log('cartRemove..', cartRemove);

      state.cart = state.cart.filter((cart) => cart.id !== action.payload);

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    decreaseProductToCart: (state, action) => {
      const index = state.cart.findIndex((cart) => cart.id === action.payload);
      if (index >= 0) {
        state.cart[index].quantity -= 1;
      }
    }
  }
});

const { reducer } = cartSlice;
export const { addToCart, removeCart, decreaseProductToCart } = cartSlice.actions;
export default reducer;
