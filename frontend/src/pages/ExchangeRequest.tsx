import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  orderId: string;
  reason: string;
  details: string;
  file: File | null;
}

const ExchangeRequest: React.FC = () => {
  useEffect(() => {
    document.title = 'Exchange/Return Request - Stitchify';
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    orderId: '',
    reason: '',
    details: '',
    file: null
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
      // Clear file error
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: undefined }));
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.orderId.trim()) newErrors.orderId = 'Order ID is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason';
    if (!formData.details.trim()) newErrors.details = 'Additional details are required';
    if (!formData.file) newErrors.file = 'Please upload an image of the item';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          orderId: '',
          reason: '',
          details: '',
          file: null
        });
        
        // Reset success message after some time
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Exchange/Return Request
        </h1>
        
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
            <p className="font-medium">Request Submitted Successfully!</p>
            <p>We've received your exchange/return request and will process it shortly. You'll receive a confirmation email with next steps.</p>
          </div>
        )}
        
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow rounded-md p-6 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          {/* Order ID */}
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
              Order ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              className={`w-full border ${errors.orderId ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.orderId && <p className="mt-1 text-sm text-red-500">{errors.orderId}</p>}
          </div>
          
          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason <span className="text-red-500">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`w-full border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              <option value="">Select a reason</option>
              <option value="damaged">Damaged Item</option>
              <option value="wrongSize">Wrong Size</option>
              <option value="defective">Defective Product</option>
              <option value="notAsExpected">Not as Expected</option>
              <option value="other">Other</option>
            </select>
            {errors.reason && <p className="mt-1 text-sm text-red-500">{errors.reason}</p>}
          </div>
          
          {/* Additional Details */}
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              className={`w-full border ${errors.details ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Please describe your issue in detail..."
            ></textarea>
            {errors.details && <p className="mt-1 text-sm text-red-500">{errors.details}</p>}
          </div>
          
          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div 
              className={`border-2 border-dashed ${errors.file ? 'border-red-500' : 'border-gray-300'} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50`}
              onClick={() => document.getElementById('file')?.click()}
            >
              {formData.file ? (
                <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <span className="text-sm text-gray-700 truncate">{formData.file.name}</span>
                  <button 
                    type="button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600">
                    Click to upload an image of the item
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, or JPEG up to 5MB
                  </p>
                </div>
              )}
            </div>
            {errors.file && <p className="mt-1 text-sm text-red-500">{errors.file}</p>}
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium 
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        transition-colors ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {submitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExchangeRequest;