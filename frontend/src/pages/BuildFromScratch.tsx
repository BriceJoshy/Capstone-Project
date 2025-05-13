import React, { useState, useEffect } from 'react';
import { CalendarDays, X } from 'lucide-react';

interface FormData {
  productType: string;
  fabricPreference: string;
  colorPreference: string;
  designDescription: string;
  measurements: {
    chest: string;
    waist: string;
    hip: string;
    inseam: string;
    shoulder: string;
    sleeve: string;
  };
  additionalCustomization: string;
  images: File[];
}

const BuildFromScratch: React.FC = () => {
  useEffect(() => {
    document.title = 'Build from Scratch - Stitchify';
  }, []);

  const [formData, setFormData] = useState<FormData>({
    productType: '',
    fabricPreference: '',
    colorPreference: '',
    designDescription: '',
    measurements: {
      chest: '',
      waist: '',
      hip: '',
      inseam: '',
      shoulder: '',
      sleeve: ''
    },
    additionalCustomization: '',
    images: []
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showModal, setShowModal] = useState(false);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof FormData],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Create preview URLs for new images
      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
      
      setFormData({
        ...formData,
        images: [...formData.images, ...newFiles]
      });
      
      setImagePreviewUrls([...imagePreviewUrls, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    // Create a copy of the arrays and remove the item at the specified index
    const newImages = [...formData.images];
    const newPreviewUrls = [...imagePreviewUrls];
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(newPreviewUrls[index]);
    
    newImages.splice(index, 1);
    newPreviewUrls.splice(index, 1);
    
    setFormData({
      ...formData,
      images: newImages
    });
    
    setImagePreviewUrls(newPreviewUrls);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.productType) {
      newErrors.productType = 'Please select a product type';
    }
    
    if (!formData.designDescription) {
      newErrors.designDescription = 'Please describe your design';
    }
    
    // Check if at least one measurement is provided
    const measurementsProvided = Object.values(formData.measurements).some(value => value.trim() !== '');
    if (!measurementsProvided) {
      newErrors['measurements.chest'] = 'Please provide at least one body measurement';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, show the stylist call modal
      setShowModal(true);
    }
  };

  const scheduleCall = () => {
    // In a real app, this would submit the form data and schedule a call
    setShowModal(false);
    setSubmitted(true);
    
    // Reset form after some time
    setTimeout(() => {
      setFormData({
        productType: '',
        fabricPreference: '',
        colorPreference: '',
        designDescription: '',
        measurements: {
          chest: '',
          waist: '',
          hip: '',
          inseam: '',
          shoulder: '',
          sleeve: ''
        },
        additionalCustomization: '',
        images: []
      });
      setImagePreviewUrls([]);
      setSubmitted(false);
    }, 5000);
  };

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imagePreviewUrls]);

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Build from Scratch</h1>
        
        <div className="mb-10 text-center text-gray-700 max-w-2xl mx-auto">
          <p>
            Create your dream garment with the help of our expert stylists! Share your ideas, 
            inspirations, and preferences with us, and we'll design something unique just for you.
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Your request has been submitted!</h2>
            <p className="text-green-700">
              Thank you for your custom design request. A stylist will contact you shortly to discuss the details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="space-y-6">
              {/* Product Type */}
              <div>
                <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className={`w-full border ${errors.productType ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  <option value="">Select a product type</option>
                  <option value="shirt">Shirt</option>
                  <option value="pants">Pants</option>
                  <option value="tshirt">T-Shirt</option>
                  <option value="jacket">Jacket</option>
                  <option value="dress">Dress</option>
                  <option value="skirt">Skirt</option>
                  <option value="other">Other</option>
                </select>
                {errors.productType && <p className="mt-1 text-sm text-red-500">{errors.productType}</p>}
              </div>
              
              {/* Fabric/Material Preference */}
              <div>
                <label htmlFor="fabricPreference" className="block text-sm font-medium text-gray-700 mb-1">
                  Fabric/Material Preference
                </label>
                <input
                  type="text"
                  id="fabricPreference"
                  name="fabricPreference"
                  value={formData.fabricPreference}
                  onChange={handleChange}
                  placeholder="e.g., Cotton, Wool, Linen, etc."
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              {/* Color Preference */}
              <div>
                <label htmlFor="colorPreference" className="block text-sm font-medium text-gray-700 mb-1">
                  Color Preference
                </label>
                <input
                  type="text"
                  id="colorPreference"
                  name="colorPreference"
                  value={formData.colorPreference}
                  onChange={handleChange}
                  placeholder="e.g., Blue, Navy, Charcoal, etc."
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              {/* Design Inspiration */}
              <div>
                <label htmlFor="designDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Design Inspiration <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="designDescription"
                  name="designDescription"
                  rows={4}
                  value={formData.designDescription}
                  onChange={handleChange}
                  placeholder="Describe the style, cut, fit, and any unique features you want..."
                  className={`w-full border ${errors.designDescription ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                ></textarea>
                {errors.designDescription && <p className="mt-1 text-sm text-red-500">{errors.designDescription}</p>}
              </div>
              
              {/* Body Measurements */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Body Measurements</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Please provide any measurements you have. Don't worry if you don't have all of them - 
                  our stylist can help during your consultation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="measurements.chest" className="block text-sm font-medium text-gray-700 mb-1">
                      Chest (inches)
                    </label>
                    <input
                      type="text"
                      id="measurements.chest"
                      name="measurements.chest"
                      value={formData.measurements.chest}
                      onChange={handleChange}
                      className={`w-full border ${errors['measurements.chest'] ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="measurements.waist" className="block text-sm font-medium text-gray-700 mb-1">
                      Waist (inches)
                    </label>
                    <input
                      type="text"
                      id="measurements.waist"
                      name="measurements.waist"
                      value={formData.measurements.waist}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="measurements.hip" className="block text-sm font-medium text-gray-700 mb-1">
                      Hip (inches)
                    </label>
                    <input
                      type="text"
                      id="measurements.hip"
                      name="measurements.hip"
                      value={formData.measurements.hip}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="measurements.inseam" className="block text-sm font-medium text-gray-700 mb-1">
                      Inseam (inches)
                    </label>
                    <input
                      type="text"
                      id="measurements.inseam"
                      name="measurements.inseam"
                      value={formData.measurements.inseam}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="measurements.shoulder" className="block text-sm font-medium text-gray-700 mb-1">
                      Shoulder (inches)
                    </label>
                    <input
                      type="text"
                      id="measurements.shoulder"
                      name="measurements.shoulder"
                      value={formData.measurements.shoulder}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="measurements.sleeve" className="block text-sm font-medium text-gray-700 mb-1">
                      Sleeve Length (inches)
                    </label>
                    <input
                      type="text"
                      id="measurements.sleeve"
                      name="measurements.sleeve"
                      value={formData.measurements.sleeve}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                {errors['measurements.chest'] && <p className="mt-1 text-sm text-red-500">{errors['measurements.chest']}</p>}
              </div>
              
              {/* Additional Customization */}
              <div>
                <label htmlFor="additionalCustomization" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Customization
                </label>
                <textarea
                  id="additionalCustomization"
                  name="additionalCustomization"
                  rows={3}
                  value={formData.additionalCustomization}
                  onChange={handleChange}
                  placeholder="Any additional features or requests (e.g., Monogramming, Embellishments, Pockets, etc.)"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              {/* Reference Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reference Images
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Upload images that inspire your design (optional)
                </p>
                
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
                  onClick={() => document.getElementById('images')?.click()}
                >
                  <p className="text-sm text-gray-600">
                    Click to upload images
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, or JPEG
                  </p>
                </div>
                
                {/* Image Previews */}
                {imagePreviewUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {imagePreviewUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Reference ${index + 1}`}
                          className="h-24 w-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 
                                    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-medium 
                            hover:bg-indigo-700 transition-colors"
                >
                  Schedule a Call with Your Stylist
                </button>
              </div>
            </div>
          </form>
        )}
        
        {/* Stylist Call Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Call with Your Stylist</h2>
              
              <p className="text-gray-700 mb-6">
                Thank you for sharing your design ideas! Our stylist would love to discuss 
                the details with you to ensure we create exactly what you envision.
              </p>
              
              <div className="mb-6 flex items-center text-indigo-600">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span className="font-medium">A stylist will contact you within 24 hours</span>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-medium 
                            hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={scheduleCall}
                  className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md font-medium 
                            hover:bg-indigo-700 transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildFromScratch;