import React, { useState } from 'react';

const ExchangeReturnForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    reason: '',
    description: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, orderId, reason, description, file } = formData;
    if (!name || !email || !orderId || !reason || !description || !file) {
      alert('Please fill in all required fields and attach a file.');
      return;
    }

    console.log('Submitting form with data:', formData);

    setFormData({
      name: '',
      email: '',
      orderId: '',
      reason: '',
      description: '',
      file: null
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-md my-10">
      <h2 className="text-xl font-bold mb-4">Place an Exchange/Return Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Email Address"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Order ID</label>
          <input
            type="text"
            name="orderId"
            required
            value={formData.orderId}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Order ID"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Reason</label>
          <select
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a reason</option>
            <option value="Damaged Item">Damaged Item</option>
            <option value="Wrong Size">Wrong Size</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Additional Details</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Describe your issue..."
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
            <label className="block text-sm mb-1">Upload Image <span className="text-red-500">*</span></label>
            <div className="flex items-center space-x-3">
                <label className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded border border-gray-300 hover:bg-gray-200 text-sm">
                Choose File
                <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                />
                </label>

                {formData.file && (
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 truncate max-w-xs">{formData.file.name}</span>
                    <button
                    type="button"
                    onClick={() => setFormData({ ...formData, file: null })}
                    className="text-red-500 hover:text-red-700 font-bold text-lg"
                    >
                    ×
                    </button>
                </div>
                )}
            </div>

            {!formData.file && (
                <p className="text-sm text-red-500 mt-1">Please upload an image</p>
            )}
            </div>


        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ExchangeReturnForm;
