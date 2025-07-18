import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src="src\assets\react.svg" alt="logo" className="mb-4 w-15" />
          <p className="text-sm mb-3">
            Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!
          </p>
          <div className="flex space-x-2">
            <img src="src\assets\visa.png" alt="visa" className="w-10 h-8" />
            <img src="src\assets\mastercard.png" alt="mastercard" className="w-8" />
            <img src="src\assets\paypal.png" alt="paypal" className="w-8" />
          </div>
        </div>

        {/* Shopping Links */}
        <div>
          <h3 className="font-semibold mb-3">SHOPPING</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Computer Store</a></li>
            <li><a href="#" className="hover:underline">Laptop Store</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">Sales & Discount</a></li>
          </ul>
        </div>

        {/* Experience Links */}
        <div>
          <h3 className="font-semibold mb-3">Experience</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Payment Method</a></li>
            <li><a href="#" className="hover:underline">Delivery</a></li>
            <li><a href="#" className="hover:underline">Return and Exchange</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">NEWSLETTER</h3>
          <p className="text-sm mb-2">Be the first to know about new arrivals, sales & promos!</p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 bg-gray-800 text-white border-b border-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        Design and Code by Thapa Technical
      </div>
    </footer>
  );
};

export default Footer;