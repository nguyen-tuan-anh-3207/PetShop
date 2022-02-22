import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fCurrency } from '../../utils/formatNumber';
import { addToCart, removeCart, decreaseProductToCart } from './api';

export const useCart = () => {
  const dispatch = useDispatch();

  const onAddToCart = (payload) => {
    dispatch(addToCart(payload));
  };

  const onDecreaseProduct = (payload) => {
    dispatch(decreaseProductToCart(payload));
  };

  const onRemoveToCart = (payload) => {
    dispatch(removeCart(payload));
  };

  return [onAddToCart, onDecreaseProduct, onRemoveToCart];
};

export const useGetQuantityCart = () => {
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.cart?.reduce((total, item) => total + item.quantity, 0);

  return totalQuantity ?? 0;
};

// trigger
export const useGetCart = () => {
  // const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const { cart } = useSelector((state) => state.cart);

  const totalAmount = cart?.reduce((amount, item) => amount + item.quantity * item.price, 0);

  return [fCurrency(totalAmount), cart];
};
