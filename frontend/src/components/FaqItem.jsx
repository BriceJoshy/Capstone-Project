import React from 'react';

const FaqItem = ({ serial, question, answer }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-1">
        {serial}. {question}
      </h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default FaqItem;
