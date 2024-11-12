import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LoginDropdown from "./LoginDropdown";


const NavBar = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow px-8">
            <Link to={"/"} className="flex items-center space-x-4">
                {/* Logo */}
                <img src="/path-to-logo.png" alt="Web Logo" className="h-6" />
                <span className="text-sm font-semibold text-gray-700">Explore Plus</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search for Products, Brands and More"
                    className="w-full p-2 border rounded-md border-gray-300 focus:outline-none bg-[#eaf2f8]"
                />
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                    <FaRegUserCircle />
                    <button className="text-gray-700">
                        <Link to={"/login"}><LoginDropdown /></Link>
                    </button>
                </div>

                <div className="flex items-center space-x-1">
                    <BsCart3 />
                    <button className="text-gray-700">
                        <Link to={"/cart"}>
                            Cart
                        </Link>
                    </button>
                </div>

                <div className="flex items-center space-x-1">
                    <FaBuildingUser />
                    <Link to={"/be_seller"} className="text-gray-700">Become a Seller</Link>
                </div>

            </div>
        </header>
    )
}

export default NavBar
