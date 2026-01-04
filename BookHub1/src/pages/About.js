import React from "react";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12 py-12 px-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About BookStore</h1>
        <p className="text-xl opacity-95">Your trusted partner in discovering great books</p>
      </div>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-blue-500">Who are we</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            The first online bookstore founded in Ein-Elhelwi. 
            BookHub started his journey with a simple mission:
            to make books accessible to everyone, everywhere. Over the years, we have grown into a vibrant community of book lovers, authors, and readers who share a passion for literature.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We believe that books have the power to transform lives, spark
            imagination, and connect people across cultures and generations. Our
            mission is to be the bridge that brings readers and their next
            favorite book together.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-4 border-blue-500">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="p-6 bg-gray-50 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">📚 Original Books</h3>
              <p className="text-gray-600">The place you trust.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🔍 Easy Discovery</h3>
              <p className="text-gray-600">Our intuitive search system helps you find exactly what you're looking for.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">💳 Secure Shopping</h3>
              <p className="text-gray-600">Shop with confidence using our encrypted payment system.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 Fast Delivery</h3>
              <p className="text-gray-600">Get your books delivered quickly within 3 days.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-4 border-blue-500">Our Values</h2>
          <ul className="space-y-3">
            <li className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
              <strong className="text-gray-800">Quality:</strong> We carefully curate our collection to ensure the best reading experience.
            </li>
            <li className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
              <strong className="text-gray-800">Accessibility:</strong> Books should be available to everyone, regardless of location or budget.
            </li>
            <li className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
              <strong className="text-gray-800">Community:</strong> We foster a community of readers who share knowledge and recommendations.
            </li>
            <li className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
              <strong className="text-gray-800">Innovation:</strong> We continuously improve our platform to enhance your shopping experience.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white p-8 rounded-xl mt-8">
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-white">Why Choose Us?</h2>
          <p className="text-lg opacity-95">
            We have a community of over 50,000 satisfied customers who trust us for their reading needs.
            Also we still the only bookstore in Ein-Elhelwi that offers original books.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;