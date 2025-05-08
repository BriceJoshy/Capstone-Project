import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-sm text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Left Side - Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-1">Stitchify</h1>
          <p className="text-[10px] uppercase text-gray-400 tracking-wide whitespace-nowrap">
            © 2025 Stitchify. All rights reserved.
          </p>
        </div>

        {/* Right Side - Two Columns */}
        <div className="flex flex-col sm:flex-row sm:space-x-12 items-center md:items-start uppercase text-xs">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a href="/about" className="hover:text-white">About Us</a>
            <a href="/how-to-measure" className="hover:text-white">How to Measure?</a>
            <a href="/blogs" className="hover:text-white">Blogs</a>
            <a href="/faq" className="hover:text-white">FAQ</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center md:items-start space-y-2 mt-4 sm:mt-0">
            <a href="/shipping-policy" className="hover:text-white">Shipping Policy</a>
            <a href="/exchange-policy" className="hover:text-white">Exchange/Returns Policy</a>
            <a href="/exchange-return-request" className="hover:text-white">Place an Exchange/Return Request</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-xs uppercase py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-x-4 gap-y-2 text-center">
          <a href="/contact" className="hover:underline">Contact</a>
          <a 
            href="https://www.instagram.com/accounts/login/?hl=en" 
            className="hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            href="https://www.youtube.com/@pickashirtcustomshirts5267" 
            className="hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a 
            href="https://www.linkedin.com/company/gucci/" 
            className="hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
