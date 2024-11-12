import { products } from "./ProductData";
import AllProducts from "./AllProducts";

const ProductList = () => {


    return (
        <>
            <div className="bg-white p-8 mt-8">
                <h2 className="text-2xl font-bold mb-10">Best Deals on Smartphones</h2>
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
            
            <AllProducts />  
        </>
    );
}

export default ProductList;
