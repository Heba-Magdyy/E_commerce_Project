import{ useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cartItem';
import { CartContext } from '../Store/CartContext';
const CartPage = () => {
  const { cart, removeFromCart, resetCart } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  const sortedCart = [...cart].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const handleResetCart = () => {
    resetCart();
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="p-2 border mr-3 mt-3 border-gray-300 rounded-md"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
          {sortedCart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex justify-end gap-x-4 mt-4">
            <button
              onClick={handleResetCart}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-900"
            >
              Reset Cart
            </button>
            <button
              onClick={handleProceedToCheckout}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-900"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
