import React from 'react';
import BackToTop from './BackToTop';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#232F3E] text-white">
      {/* Back to top button */}
      <div className="bg-[#37475A] hover:bg-[#485769] transition-colors">
        <button 
          onClick={scrollToTop}
          className="w-full py-3 text-sm font-medium"
        >
          Back to top
        </button>
      </div>

      {/* Main footer links */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">About Amazon</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Amazon Devices</a></li>
              <li><a href="#" className="hover:underline">Amazon Science</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Sell products on Amazon</a></li>
              <li><a href="#" className="hover:underline">Sell on Amazon Business</a></li>
              <li><a href="#" className="hover:underline">Sell apps on Amazon</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Amazon Payment Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Amazon Business Card</a></li>
              <li><a href="#" className="hover:underline">Shop with Points</a></li>
              <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
              <li><a href="#" className="hover:underline">Amazon Currency Converter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Amazon and COVID-19</a></li>
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Your Orders</a></li>
              <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <a href="/" className="text-2xl font-bold mb-4 inline-block">
            amazon
          </a>
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs">
            <a href="#" className="hover:underline">Conditions of Use</a>
            <a href="#" className="hover:underline">Privacy Notice</a>
            <a href="#" className="hover:underline">Interest-Based Ads</a>
          </div>
          <p className="text-xs text-gray-400">
            © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
};

export default Footer;