import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";


const NavBar = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow px-8">
            <div className="flex items-center space-x-4">
                {/* Logo */}
                <img src="/path-to-logo.png" alt="Web Logo" className="h-6" />
                <span className="text-sm font-semibold text-gray-700">Explore Plus</span>
            </div>

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
                        Login
                    </button>
                    <RiArrowDropDownLine />
                </div>

                <div className="flex items-center space-x-1">
                    <BsCart3 />
                    <button className="text-gray-700">Cart</button>
                </div>

                <div className="flex items-center space-x-1">
                    <FaBuildingUser />
                    <button className="text-gray-700">Become a Seller</button>
                </div>

            </div>
        </header>
    )
}

export default NavBar
