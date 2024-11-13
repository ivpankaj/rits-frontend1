import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products_2 } from './ProductData';

const AllProducts = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(true);
  const totalPages = Math.ceil(products_2.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products_2.slice(startIndex, endIndex);

  const navigate = useNavigate(); // React Router's navigate hook

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setFade(false); // Start fade-out animation
      setTimeout(() => {
        setCurrentPage(newPage);
        setFade(true); // Start fade-in animation
      }, 300); // Animation duration
    }
  };

  const handleProductClick = (productId) => {
    // Navigate to product details page, passing the product ID (or use the product data as needed)
    navigate(`/productDetails`, { state: { productId } });
  };

  return (
    <div className="bg-white mt-12">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

        <div className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product.id)} // Product click handler
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-md text-gray-500">{product.color}</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">{product.price}</p>
                  <button className="text-red-600">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
          >
            Previous
          </button>

          <p className="text-gray-700">
            Page {currentPage} of {totalPages}
          </p>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
