 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "./ProductData";
import AllProducts from "./AllProducts";

const ProductList = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-white p-8 mt-8">
        <h2 className="text-2xl font-bold mb-10">Best Deals on Smartphones</h2>
        <Slider {...sliderSettings} className="text-center">
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <div className="border rounded-lg p-4 text-center bg-white shadow cursor-pointer">
                <div className="w-full h-[250px] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-[240px]"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600">₹{product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <AllProducts />
    </>
  );
};

export default ProductList;
