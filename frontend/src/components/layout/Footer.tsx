import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            {/* Branding Block */}
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h2 className="text-4xl font-bold text-white mb-4">Stitchify</h2>
              <p className="text-sm uppercase">
                © 2025 Stitchify. All rights reserved.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:flex md:w-2/3 md:justify-end">
              {/* Column 1 */}
              <div className="mt-4 md:mt-0 md:ml-16">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-sm hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/measurement-guide" className="text-sm hover:text-white">
                      How to Measure?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs" className="text-sm hover:text-white">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-sm hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="mt-10 md:mt-0 md:ml-16">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                  Customer Service
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/shipping-policy" className="text-sm hover:text-white">
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/exchange-policy" className="text-sm hover:text-white">
                      Exchange/Returns Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/exchange-request" className="text-sm hover:text-white">
                      Place an Exchange/Return Request
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-sm hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-xs uppercase text-gray-400 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <Link to="/contact" className="mr-4 hover:underline">
              Contact
            </Link>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;