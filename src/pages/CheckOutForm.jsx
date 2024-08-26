import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Store/CartContext';

const CheckOutForm = () => {
  const [emailError, setEmailError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [cardNumError, setCardNumError] = useState('');
  const [cardExpError, setCardExpError] = useState('');
  const { cart, resetCart, handleTitles } = useContext(CartContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shipping: { email: '', confirmEmail: '', country: '', fullName: '', address: '', city: '', postalCode: '' },
    payment: { cardNumber: '', expDate: '', cvv: '' },
    review: { comments: '' },
  });
  const [cartTitles, setCartTitles] = useState([]);

  useEffect(() => {
    // Load form data from local storage when component mounts
    const savedFormData = JSON.parse(localStorage.getItem('checkoutFormData'));
    if (savedFormData) {
      setFormData(savedFormData);
      const savedStep = parseInt(localStorage.getItem('checkoutStep'), 10);
      if (savedStep) {
        setStep(savedStep);
      }
    }
  }, []);

  useEffect(() => {
    // Save form data to local storage whenever formData or step changes
    localStorage.setItem('checkoutFormData', JSON.stringify(formData));
    localStorage.setItem('checkoutStep', step);
  }, [formData, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const currentStep = step === 1 ? 'shipping' : step === 2 ? 'payment' : 'review';

    setFormData({
      ...formData,
      [currentStep]: {
        ...formData[currentStep],
        [name]: value,
      },
    });

    // Clear error messages
    if (name === 'email' || name === 'confirmEmail') {
      setEmailError('');
    } else if (name === 'postalCode') {
      setPostalCodeError('');
    } else if (name === 'cardNumber' || name === 'expDate' || name === 'cvv') {
      setCardNumError('');
      setCardExpError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePostalCode = (postalCode) => {
    const postalCodeRegex = /^\d{7}$/;
    return postalCodeRegex.test(postalCode);
  };

  const validateCardNumber = (cardNumber) => {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
  };

  const validateExpDate = (expDate) => {
    const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return expDateRegex.test(expDate);
  };

  const handleNext = () => {
    const currentStepData = step === 1 ? formData.shipping : step === 2 ? formData.payment : null;

    if (step === 1) {
      if (!validateEmail(currentStepData.email)) {
        setEmailError("Invalid email format");
        return;
      }

      if (currentStepData.email !== currentStepData.confirmEmail) {
        setEmailError("Emails do not match");
        return;
      }

      if (!validatePostalCode(currentStepData.postalCode)) {
        setPostalCodeError("Invalid postal code");
        return;
      }

      if (currentStepData.email && currentStepData.confirmEmail && currentStepData.country && currentStepData.fullName && currentStepData.address && currentStepData.city && currentStepData.postalCode) {
        setStep(2);
      }
    } else if (step === 2) {
      if (!validateCardNumber(currentStepData.cardNumber)) {
        setCardNumError("Invalid card number");
        return;
      }

      if (!validateExpDate(currentStepData.expDate)) {
        setCardExpError("Invalid expiration date");
        return;
      }

      if (currentStepData.cardNumber && currentStepData.expDate && currentStepData.cvv) {
        setStep(3);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Call handleTitles to set cartTitles
    const titles = handleTitles();
    setCartTitles(titles);

    // Navigate to OrderSummary with formData and cartTitles
    navigate('/order-summary', { state: { formData, cartTitles } });

    // Reset cart and clear local storage after navigating
    resetCart();
    localStorage.removeItem('checkoutFormData');
    localStorage.removeItem('checkoutStep');
  };

  const handleReturnToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {step === 1 && (
        <div className='space-y-4'>
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.shipping.email}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirm Your Email</label>
              <input
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                value={formData.shipping.confirmEmail}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.shipping.country}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.shipping.fullName}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.shipping.address}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.shipping.city}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={formData.shipping.postalCode}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
              {postalCodeError && <p className="text-red-500 text-sm mt-1">{postalCodeError}</p>}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handleReturnToCart} className="bg-gray-500 text-white px-4 py-2 rounded-md">Return to Cart</button>
              <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className='space-y-4'>
          <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={formData.payment.cardNumber}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
              {cardNumError && <p className="text-red-500 text-sm mt-1">{cardNumError}</p>}
            </div>
            <div>
              <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">Expiration Date (MM/YY)</label>
              <input
                type="text"
                name="expDate"
                id="expDate"
                value={formData.payment.expDate}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
              {cardExpError && <p className="text-red-500 text-sm mt-1">{cardExpError}</p>}
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={formData.payment.cvv}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-md">Back</button>
              <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className='space-y-4'>
          <h2 className="text-2xl font-bold mb-4">Review and Submit</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
              <textarea
                name="comments"
                id="comments"
                value={formData.review.comments}
                onChange={handleChange}
                className="form-control mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-md">Back</button>
              <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit Order</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
