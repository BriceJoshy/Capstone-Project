import React, { useEffect } from 'react';

const ExchangePolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Exchange & Returns Policy - Stitchify';
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Exchange & Returns Policy
        </h1>
        
        <div className="space-y-8 text-justify">
          <p className="text-gray-600">
            At Stitchify, our customers' satisfaction is our top priority. We understand that sometimes 
            a purchase may not meet your expectations, which is why we've created a straightforward 
            exchange and return policy to ensure your shopping experience remains positive.
          </p>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eligibility for Exchange/Return
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Request must be made within 7 days of receiving your order.
              </li>
              <li>
                Items must be unused, unwashed, and in their original condition with all tags 
                and packaging intact.
              </li>
              <li>
                Customized items or "Build from Scratch" garments are non-returnable unless they 
                are defective or significantly different from what was ordered.
              </li>
              <li>
                For hygiene reasons, certain intimate apparel items may not be eligible for return.
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Place a Request
            </h2>
            <p className="text-gray-600">
              You can place an exchange or return request through the "Place an Exchange/Return Request" 
              link available in the footer of our website. Alternatively, registered users can initiate 
              the process from their dashboard under "My Orders." Please include your order number, 
              the items you wish to return, and the reason for your return.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Refunds
            </h2>
            <p className="text-gray-600">
              After we receive and inspect your return, we will process your refund or exchange. 
              Refunds will be issued to the original payment method within 7-10 business days after 
              our quality check confirms the condition of the returned items. For items paid via 
              cash on delivery, refunds will be processed to your Stitchify store credit or via 
              bank transfer, based on your preference.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Note
            </h2>
            <p className="text-gray-600">
              Stitchify reserves the right to deny returns or exchanges that do not meet the 
              criteria outlined in this policy. Shipping fees for returns due to customer preference 
              (not due to our error) are the responsibility of the customer. If you received a 
              defective or incorrect item, please contact our customer service immediately, and 
              we will arrange for return shipping at our expense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePolicy;