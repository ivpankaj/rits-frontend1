const ProductList = () => {
    const products = [
        { name: "Realme P1 5G", price: "From ₹13,999", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/x/f/-original-imah4khx9u3zxdbk.jpeg?q=70" },
        { name: "vivo T2 Pro 5G", price: "From ₹20,999", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70" },
        { name: "Poco M6 Pro 5G", price: "From ₹9,249", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70" },
        { name: "Moto Edge 50 Fusion", price: "From ₹19,999", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70" },
        { name: "Realme P1 Pro 5G", price: "Just ₹16,999", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70" },
    ];

    products.forEach((product) => {
        console.log("url: " + product.image);
    });

    return (
        <div className="min-h-screen bg-white p-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">Best Deals on Smartphones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 text-center bg-white shadow cursor-pointer">
                        <div className="h-[330px]">
                            <img src={product.image} alt={product.name} className="w-full h-100 object-cover mb-2" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-lg text-gray-600">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
