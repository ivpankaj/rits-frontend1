// src/components/ProductDetails.js
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([
    { username: 'Alice', rating: 5, text: 'Amazing product! Highly recommended.' },
    { username: 'Bob', rating: 4, text: 'Great quality, just a bit pricey.' },
    { username: 'Bob', rating: 4, text: 'Great quality, just a bit pricey.' },
  ]);

  const product = {
    id: 1,
    name: "boAt Airdopes 163 TWS Earbuds",
    brand: "boAt",
    description: "TWS Earbuds with 50H Playback, ENx™ Tech, and 13mm drivers for a rich, immersive audio experience. Features Bluetooth v5.2 and IPX5 water resistance.",
    price: 1299,
    originalPrice: 2999,
    rating: 4.3,
    features: [
      "50 Hours Total Playback",
      "ENx™ Technology for Clear Calls",
      "13mm Drivers for Powerful Sound",
      "Bluetooth v5.2",
      "IPX5 Water Resistance",
    ],
    image: "https://via.placeholder.com/400",
    relatedProducts: [
      { id: 2, name: "boAt Bluetooth Speaker", price: 999, image: "https://via.placeholder.com/200" },
      { id: 3, name: "boAt Smart Watch", price: 2499, image: "https://via.placeholder.com/200" },
      { id: 3, name: "boAt Smart Watch", price: 2499, image: "https://via.placeholder.com/200" },
    ],
  };

  const handleQuantityChange = (e) => setQuantity(Math.max(1, e.target.value));

  const handleAddReview = () => {
    if (reviewText) {
      setReviews([...reviews, { username: 'Guest', rating: 5, text: reviewText }]);
      setReviewText('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <div className="w-full  bg-white rounded-lg shadow-lg p-6 mb-6  ">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-lg w-full h-auto max-h-[450px] mx-w-[500px] object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-500 text-sm mb-1">Brand: {product.brand}</p>

            <div className="flex items-center mb-2">
              <FaStar className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-800 ml-1 font-semibold">{product.rating}</span>
              <span className="ml-2 text-sm text-gray-600">({reviews.length} Reviews)</span>
            </div>

            <p className="text-lg font-semibold text-indigo-600 mb-4">
              ₹{product.price} <span className="line-through text-gray-500 ml-2">₹{product.originalPrice}</span>
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-6">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mb-6">
              <label className="text-gray-600">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-20 border border-gray-400 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
              onClick={() => alert(`Purchased ${quantity} ${product.name}(s)!`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>

        <ul className="space-y-4 mb-6">
          {reviews.map((review, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-700 font-semibold">{review.username}</span>
                <span className="ml-2 text-yellow-400">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </li>
          ))}
        </ul>

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write a review..."
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
        />
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          onClick={handleAddReview}
        >
          Add Review
        </button>
      </div>

      {/* Related Products Section */}
      <div className="w-full  bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="border rounded-lg p-4 flex flex-col items-center">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="w-32 h-32 rounded-lg mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700">{relatedProduct.name}</h3>
              <p className="text-indigo-600 font-semibold">₹{relatedProduct.price}</p>
              <button
                className="mt-3 bg-indigo-500 text-white py-1 px-4 rounded-md hover:bg-indigo-600 transition"
                onClick={() => alert(`Viewing ${relatedProduct.name}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
