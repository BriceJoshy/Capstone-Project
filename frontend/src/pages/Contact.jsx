import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10">
          We're here to help! Reach out to us for support, inquiries, or feedback.
        </p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-lg font-semibold text-blue-700">Email</h2>
            <p className="text-md">support@stitchify.in</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-700">Phone</h2>
            <p className="text-md">+91 9111553117</p>
            <p className="text-sm text-gray-500">(Available 12:00pm to 8:00pm)</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-700">Address</h2>
            <p className="text-md">
              5th Floor, Srajan College of Design, <br />
              Bhugaon Road, Bavdhan, Pune 411021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
