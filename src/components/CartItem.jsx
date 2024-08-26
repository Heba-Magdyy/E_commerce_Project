import React, { useContext } from 'react';
import { IoMdAdd, IoMdRemove, IoMdClose } from 'react-icons/io';
import { CartContext } from '../Store/CartContext';
const CartItem = ({ item }) => {
  const { id, title, thumbnail, description, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <img src={thumbnail} alt={title} className="max-w-[80px]" />
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <h2>{title}</h2>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <p>{description}</p>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                className="flex-1 flex justify-center items-center cursor-pointer"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            <div>${price}</div>
            <div>$ {parseFloat(price * amount).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
