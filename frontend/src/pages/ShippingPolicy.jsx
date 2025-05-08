import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shipping Policy</h1>

      <p className="text-gray-600 text-base leading-relaxed text-justify">
        At Stitchify, we are committed to delivering your orders across India in a timely and secure manner.
        All orders are processed within 1–2 business days. Once shipped, delivery times may vary between 
        3–7 working days depending on your location.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        You will receive a confirmation email with tracking details once your order is dispatched. 
        We currently partner with reliable national courier services to ensure timely deliveries, 
        even in remote areas.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        Shipping is free for all prepaid orders above ₹999. A flat shipping fee of ₹60 is applicable 
        for orders below this amount. Cash on Delivery (COD), if available, may include an additional 
        convenience fee.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        For customized or "Build from Scratch" orders, shipping timelines may vary based on tailoring 
        and quality checks. You will be kept informed of each step in your order process.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        For any shipping-related questions or delays, please contact our support team with your order ID.
      </p>
    </div>
  );
};

export default ShippingPolicy;
