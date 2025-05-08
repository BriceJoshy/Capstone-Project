import React from 'react';
import FaqItem from '../components/FaqItem';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place a custom tailoring order?",
      answer: "Navigate to the 'Build from Scratch' section, choose your preferences, and submit your order."
    },
    {
      question: "How do I check my order status?",
      answer: "Log in to your account and go to the 'My Orders' section to track your order."
    },
    {
      question: "Can I return or exchange a stitched item?",
      answer: "Yes, as long as it meets our return policy criteria. Visit the 'Exchange/Returns Policy' page for details."
    },
    {
      question: "What measurements do I need to provide?",
      answer: "Check the 'How to Measure?' page for video instructions and guides tailored to each clothing item."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only serve customers across India."
    },
  ];

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          serial={index + 1}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQ;
