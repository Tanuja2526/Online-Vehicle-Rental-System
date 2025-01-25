import React from "react";

const Blog = () => {
  // Blog post data array with vehicle-related content
  const blogPosts = [
    {
      title: "Top 5 Tips for Maintaining Your Rental Bicycle",
      content:
        "Maintaining your rental bicycle is key to ensuring a safe and enjoyable ride. Start by regularly checking the tire pressure, as properly inflated tires prevent flats and ensure a smoother ride. Keep the chain lubricated to avoid rust and ensure smooth gear shifting, especially after riding in wet or dusty conditions. Always inspect the brakes before each ride, ensuring they’re responsive for safe stopping.",
      date: "January 21, 2025",
      image: "./src/img/bicycle.jpg",
    },
    {
      title: "New Vehicles Available for Rent This Year!",
      content:
        "We’re thrilled to introduce new models to our fleet! From sleek luxury sedans to compact yet powerful cars, we have the perfect ride for your next journey. Book now and experience unmatched comfort and style on the road.",
      date: "January 19, 2025",
      image: "./src/img/car.jpg",
    },
    {
      title: "How to Choose the Right Bike for Your Road Trip",
      content:
        "Choosing the right bike for your road trip is crucial for ensuring comfort and enjoyment throughout the journey. First, consider the terrain you'll be riding on—if you're tackling rough trails or diverse landscapes, a mountain bike with sturdy tires and suspension is ideal. For smoother, paved roads, a road or touring bike will provide a faster and more comfortable ride.",
      date: "January 15, 2025",
      image: "./src/img/bike.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-6">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text mb-12 mt-8">
        Our Blogs
      </h1>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90"
            />
            {/* Blog Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600 leading-relaxed">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
