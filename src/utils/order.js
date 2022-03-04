export function getInfoOrder({ totalAmount, cart, user }) {
  const cartConvert = cart?.map((item) => ({
    ...item,
    subTotal: item.quantity * item.price
  }));

  return {
    customerId: user?._id,
    products: cartConvert,
    total: totalAmount
  };
}
