function CategoryMenu() {
    const categories = [
        { name: "Grocery", icon: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
        { name: "Mobiles", icon: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
        { name: "Home & Furniture", icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
        { name: "Appliances", icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
        { name: "Home & Furniture", icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
        { name: "Appliances", icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
        { name: "Grocery", icon: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
        { name: "Home & Furniture", icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
        { name: "Appliances", icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
    ];

    return (
        <div className="flex justify-around py-5 bg-white mt-3">
            {categories.map((category) => (
                <div key={category.name} className="flex flex-col items-center">
                    <img src={category.icon} alt={category.name} className="h-10 mb-1" />
                    <span className="text-md text-gray-700">{category.name}</span>
                </div>
            ))}
        </div>
    );
}

export default CategoryMenu;
