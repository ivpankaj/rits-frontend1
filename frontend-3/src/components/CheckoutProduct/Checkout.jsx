import { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const products = [
    { name: 'Wireless Earbuds', quantity: 1, price: 50, image: 'https://via.placeholder.com/50' },
    { name: 'Phone Charger', quantity: 2, price: 10, image: 'https://via.placeholder.com/50' },
    { name: 'Smart Watch', quantity: 1, price: 150, image: 'https://via.placeholder.com/50' },
  ];

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (<>
    
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
 
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg">

        {/* Product Summary Sidebar */}
        <div className="lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Your Products</h3>
          <ul className="space-y-4">
            {products.map((product, index) => (
              <li key={index} className="flex items-center gap-10 text-gray-600">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded mr-4" />
                <div className="flex flex-col">
                  <span>{product.name} (x{product.quantity})</span>
                  <span className="text-gray-500 text-sm">${product.price * product.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 border-t border-gray-200 pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="lg:w-2/3 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center lg:text-left">Checkout</h2>

          <form onSubmit={handleSubmit}>
            {/* Billing Information */}
            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Billing Information</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <label className="block text-gray-600 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Payment Information</h3>
              <label className="block text-gray-600 mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">Expiration Date</label>
                  <input
                    type="text"
                    name="expiration"
                    value={formData.expiration}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-600 mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder='Last 3 digits for your card'
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </>

  );
};

export default Checkout;
