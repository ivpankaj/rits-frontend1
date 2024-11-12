import {products_2} from './ProductData';

const AllProducts = () => {
    return (
        <div className="bg-white mt-12">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products_2.map((product) => (
                        <div key={product.id} className="group relative">
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
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-500">{product.color}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-gray-900">{product.price}</p>
                                    <button className="text-red-600">add to card</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts
