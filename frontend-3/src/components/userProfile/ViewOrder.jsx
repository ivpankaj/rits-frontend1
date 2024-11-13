import { TiArrowBackOutline } from "react-icons/ti";
import {Link} from "react-router-dom";

const orders = [
  {
    orderNumber: "123456",
    date: "2024-11-01",
    items: [
      { name: "Wireless Earbuds", quantity: 1, price: 50 },
      { name: "Phone Charger", quantity: 2, price: 10 },
    ],
    total: 70,
    status: "Delivered",
  },
  {
    orderNumber: "123457",
    date: "2024-10-25",
    items: [
      { name: "Smart Watch", quantity: 1, price: 150 },
    ],
    total: 150,
    status: "Shipped",
  },
];

const ViewOrders = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Link to={"/userProfile"}>
        <TiArrowBackOutline className="text-2xl cursor-pointer"/>
      </Link>

      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Your Orders</h2>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Order #{order.orderNumber}
              </h3>
              <p className="text-gray-500">Date: {order.date}</p>
              <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                Status: {order.status}
              </p>
            </div>

            {/* Order Items */}
            <div className="border-t border-gray-200 pt-4">
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between text-gray-600 mb-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between text-gray-800 font-semibold">
              <span>Total:</span>
              <span>${order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrders;
