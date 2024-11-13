import {Link} from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/100" // replace with user's profile image URL
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
          />
        </div>
        
        {/* User Info */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
          <p className="text-gray-500 text-sm">Joined: January 2023</p>
        </div>

        {/* Edit Profile and Orders Buttons */}
        <div className="mt-6">
          <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition">
            <Link to={"/editProfile"}>Edit Profile</Link>
          </button>
          <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md mt-4 hover:bg-gray-400 transition">
            <Link to={"/viewOrders"}>View Orders</Link>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Address:</span>
            <span className="text-gray-800">1234 Elm St, Springfield</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone:</span>
            <span className="text-gray-800">(123) 456-7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

