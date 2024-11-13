import Slider from "react-slick";

function CategoryMenu() {
  const categories = [
    { name: "Grocery", icon: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
    { name: "Mobiles", icon: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
    { name: "Home & Furniture", icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
    { name: "Appliances", icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
    { name: "Fashion", icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
    { name: "Electronics", icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
    { name: "Beauty", icon: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
    { name: "Sports", icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
    { name: "Toys", icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
  ];

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-5 mt-3">
      <Slider {...sliderSettings}>
        {categories.map((category) => (
          <div key={category.name} className="px-4 cursor-pointer">
            <img src={category.icon} alt={category.name} className=" " />
            <span className="text-md text-gray-700">{category.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryMenu;
