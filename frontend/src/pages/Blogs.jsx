import React from 'react';
import BlogCard from '../components/BlogCard';
import blogImg1 from '../assets/blog1.png';
import blogImg2 from '../assets/blog2.png';
import blogImg3 from '../assets/blog3.png';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Why Custom Stitching Is the Future',
      images: [blogImg1, blogImg2], // Multiple images for this blog
      summary: 'Custom stitching offers a better fit, more style options, and personalization...',
      fullArticle: 'In the world of fashion, custom stitching has gained immense popularity over the years. It allows people to have their clothes tailored exactly to their body type, offering a fit that off-the-rack clothing can never achieve. Custom stitching also gives you the freedom to personalize every aspect of your attire, from the fabric choice to the fit and design...'
    },
    {
      title: 'How Stitchify Helps Tailors Grow',
      images: [blogImg3], // Multiple images for this blog
      summary: 'Learn how our platform supports local tailors and streamlines the ordering process...',
      fullArticle: 'Stitchify is dedicated to helping local tailors thrive in a competitive market. Our platform makes it easy for customers to order custom clothing, which is then processed and completed by tailors. This helps tailors increase their business without needing to handle complex customer relationships or logistics themselves...'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Latest Blogs</h2>
      <div className="space-y-6">
        {blogPosts.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            images={blog.images}
            summary={blog.summary}
            fullArticle={blog.fullArticle}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
