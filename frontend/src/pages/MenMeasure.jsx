import React from 'react';
import { menVideoData } from '../pages/MenMeasurementVideos'; // or use inline

const MenMeasure = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Men's Measurement Videos</h2>
      {menVideoData.map((section, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-lg font-bold mb-4">{section.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.videos.map((url, i) => (
              <div key={i} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={url}
                  title={`${section.category} Video ${i + 1}`}
                  allowFullScreen
                  className="w-full h-full border rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenMeasure;
