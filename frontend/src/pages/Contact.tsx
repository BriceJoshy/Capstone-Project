import React, { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - Stitchify';
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-10 text-center">
          We're here to help! Reach out to us for support, inquiries, or feedback.
        </p>
        
        <div className="space-y-8">
          {/* Email */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </h2>
            <p className="text-gray-700 ml-7">
              <a href="mailto:support@stitchify.com" className="hover:underline">
                support@stitchify.com
              </a>
            </p>
          </div>
          
          {/* Phone */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Phone
            </h2>
            <div className="text-gray-700 ml-7">
              <p>
                <a href="tel:+15551234567" className="hover:underline">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Available Monday-Friday, 9am-6pm EST
              </p>
            </div>
          </div>
          
          {/* Address */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Address
            </h2>
            <div className="text-gray-700 ml-7">
              <p>Stitchify Headquarters</p>
              <p>123 Fashion Avenue</p>
              <p>Suite 456</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;