import React from 'react';

const ExchangePolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Exchange & Returns Policy</h1>

      <p className="text-gray-600 text-base leading-relaxed text-justify">
        At Stitchify, your satisfaction is our priority. If you are not happy with your purchase, we offer easy exchanges and returns based on the conditions below.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Eligibility for Exchange/Return</h2>
      <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed">
        <li>Requests must be placed within 7 days of delivery.</li>
        <li>Items must be unused, unwashed, and in original packaging with tags intact.</li>
        <li>Customized and "Build from Scratch" orders are not eligible for return/exchange unless defective.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How to Place a Request</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Visit the “Place an Exchange/Return Request” section from the footer or your account dashboard.
        Enter your order ID, select the item, and choose a reason. Once approved, we’ll schedule a pickup 
        or share the return address.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Refunds</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Refunds are processed within 7–10 working days after the product reaches us and passes quality checks.
        Refunds will be made via the original payment method or as store credit based on your choice.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Note</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        We reserve the right to deny return/exchange requests that do not meet the above conditions.
      </p>
    </div>
  );
};

export default ExchangePolicy;
