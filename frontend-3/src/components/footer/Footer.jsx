import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">ABOUT</h3>
                        <ul>
                            <li className="mb-2">Contact Us</li>
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Careers</li>
                            <li className="mb-2">RIT Stories</li>
                            <li className="mb-2">Press</li>
                            <li className="mb-2">Corporate Information</li>
                        </ul>
                    </div>

                    {/* Group Companies Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">GROUP COMPANIES</h3>
                        <ul>
                            <li className="mb-2">Myntra</li>
                            <li className="mb-2">Cleartrip</li>
                            <li className="mb-2">Shopsy</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">HELP</h3>
                        <ul>
                            <li className="mb-2">Payments</li>
                            <li className="mb-2">Shipping</li>
                            <li className="mb-2">Cancellation & Returns</li>
                            <li className="mb-2">FAQ</li>
                        </ul>
                    </div>

                    {/* Consumer Policy Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">CONSUMER POLICY</h3>
                        <ul>
                            <li className="mb-2">Cancellation & Returns</li>
                            <li className="mb-2">Terms Of Use</li>
                            <li className="mb-2">Security</li>
                            <li className="mb-2">Privacy</li>
                            <li className="mb-2">Sitemap</li>
                            <li className="mb-2">Grievance Redressal</li>
                            <li className="mb-2">EPR Compliance</li>
                        </ul>
                    </div>
                </div>

                {/* Contact and Social Section */}
                <div className="flex flex-col md:flex-row justify-between mt-8 border-t border-gray-700 pt-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Mail Us:</h3>
                        <p>
                            RIT Internet Private Limited,
                            <br />
                            Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                            <br />
                            Outer Ring Road, Devarabeesanahalli Village,
                            <br />
                            Bengaluru, 560103,
                            <br />
                            Karnataka, India
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Registered Office Address:</h3>
                        <p>
                            RIT Internet Private Limited,
                            <br />
                            Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                            <br />
                            Outer Ring Road, Devarabeesanahalli Village,
                            <br />
                            Bengaluru, 560103,
                            <br />
                            Karnataka, India
                            <br />
                            CIN : U51109KA2012PTC066107
                            <br />
                            Telephone: 044-45614700 / 044-67415800
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-6 md:mt-0">
                        <FaFacebookF className="text-2xl cursor-pointer" />
                        <FaTwitter className="text-2xl cursor-pointer" />
                        <FaInstagram className="text-2xl cursor-pointer" />
                        <FaYoutube className="text-2xl cursor-pointer" />
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-col md:flex-row justify-between mt-8 text-sm text-gray-400">
                    <div className="flex space-x-6">
                        <a href="#" className="hover:underline">Become a Seller</a>
                        <a href="#" className="hover:underline">Advertise</a>
                        <a href="#" className="hover:underline">Gift Cards</a>
                        <a href="#" className="hover:underline">Help Center</a>
                    </div>
                    <p className="mt-4 md:mt-0">&copy; 2007-2024 Flipkart.com</p>
                </div>

                {/* Payment Methods */}
                <div className="flex justify-center mt-4 space-x-4 text-gray-400">
                    <span>Visa</span>
                    <span>MasterCard</span>
                    <span>American Express</span>
                    <span>Rupay</span>
                    <span>COD</span>
                    <span>EMI Options</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
