import React, { useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
  images: string[];
  summary: string;
  fullArticle: string;
  publishDate: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [showFullArticle, setShowFullArticle] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{blog.publishDate}</p>
      
      {blog.images.length > 0 && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={blog.images[0]} 
            alt={blog.title} 
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      
      <p className="text-gray-700 mb-4">{blog.summary}</p>
      
      {showFullArticle ? (
        <>
          <div className="text-gray-700 mb-4 space-y-4">
            {blog.fullArticle.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button 
            onClick={() => setShowFullArticle(false)}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Show Less
          </button>
        </>
      ) : (
        <button 
          onClick={() => setShowFullArticle(true)}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Read More
        </button>
      )}
    </div>
  );
};

const Blogs: React.FC = () => {
  useEffect(() => {
    document.title = 'Blogs - Stitchify';
  }, []);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "The Art of Perfect Measurements: A Guide to Getting Your Size Right",
      images: ["https://images.pexels.com/photos/4620623/pexels-photo-4620623.jpeg"],
      summary: "Discover the secrets to getting accurate measurements for tailored clothing. Learn how proper measurements can transform your wardrobe.",
      fullArticle: "Getting the right measurements is the foundation of a well-fitted garment. In this comprehensive guide, we'll walk you through the process of taking accurate measurements for various types of clothing.\n\nWhen measuring for a shirt, focus on the collar, chest, waist, hips, and sleeve length. For pants, the essential measurements include waist, hip, inseam, and outseam. Always use a fabric measuring tape and ensure it's not twisted when measuring around your body.\n\nRemember that professional tailors can often provide more accurate measurements, especially for complex garments like suits and formal wear. At Stitchify, we offer virtual measurement consultations to ensure your custom outfits fit perfectly every time.",
      publishDate: "May 15, 2025"
    },
    {
      id: 2,
      title: "Understanding Fabric Types: Which Material is Right for You?",
      images: ["https://images.pexels.com/photos/4792069/pexels-photo-4792069.jpeg"],
      summary: "Explore different fabric types and their properties to make informed choices for your custom clothing.",
      fullArticle: "The fabric you choose significantly impacts how your garment looks, feels, and lasts. Cotton is breathable and versatile, making it ideal for everyday wear. Linen offers exceptional cooling properties but wrinkles easily. Wool provides warmth and natural stretch, perfect for suits and winter wear.\n\nSynthetic fabrics like polyester and nylon offer durability and wrinkle resistance but may not breathe as well as natural fibers. Blends combine the benefits of multiple materials, such as cotton-polyester for wrinkle resistance and breathability.\n\nConsider your climate, the garment's purpose, and maintenance requirements when selecting fabric. For formal events, silk and high-quality wool are excellent choices. For daily wear, cotton and durable blends will serve you well.\n\nAt Stitchify, we offer a wide selection of premium fabrics, and our experts can help you choose the perfect material for your specific needs.",
      publishDate: "April 28, 2025"
    },
    {
      id: 3,
      title: "Sustainable Fashion: The Future of Tailoring",
      images: ["https://images.pexels.com/photos/6649429/pexels-photo-6649429.jpeg"],
      summary: "Learn how sustainable practices are shaping the future of tailoring and how you can make eco-friendly clothing choices.",
      fullArticle: "Sustainability has become increasingly important in the fashion industry, and tailoring is no exception. Sustainable tailoring focuses on reducing waste, using eco-friendly materials, and ensuring ethical production processes.\n\nOne significant advantage of custom tailoring is its inherent sustainability. Made-to-measure garments reduce waste compared to mass production, as they're created specifically for the individual. When clothes fit perfectly, they're worn more frequently and kept longer, reducing the overall environmental impact.\n\nAt Stitchify, we're committed to sustainable practices. We offer organic and sustainably-sourced fabrics, minimize waste in our cutting processes, and ensure fair labor practices throughout our supply chain. Our repair services also extend the life of your garments, reducing the need for replacements.\n\nBy choosing custom tailoring with sustainable materials, you're not just investing in a garment that fits perfectly—you're also making a positive choice for the planet.",
      publishDate: "March 12, 2025"
    }
  ];

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Latest Blogs</h1>
        
        <div className="space-y-8">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;