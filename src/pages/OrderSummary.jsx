import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Store/CartContext';


const OrderSummary = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const { cart, resetCart,cartTitles } = useContext(CartContext);
  const navigate = useNavigate();
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const handleReturnToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Order Summary</h1>

        {formData && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <p><strong>Full Name:</strong> {formData.shipping.fullName}</p>
            <p><strong>Address:</strong> {formData.shipping.address}</p>
            <p><strong>City:</strong> {formData.shipping.city}</p>
            <p><strong>Postal Code:</strong> {formData.shipping.postalCode}</p>
            <p><strong>Email:</strong> {formData.shipping.email}</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Payment Details</h2>
            <p><strong>Card Number:</strong> {formData.payment.cardNumber}</p>
            <p><strong>Expiration Date:</strong> {formData.payment.expDate}</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Order Details</h2>
            <ul>
              {cartTitles.map((title, index) => (
                <li key={index} className="mb-2">
                  {title}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Estimated Delivery Date</h2>
            <p>{deliveryDate.toDateString()}</p>
          </div>
        )}
        
        {!formData && (
          <p>No order details available.</p>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={handleReturnToHome }
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
