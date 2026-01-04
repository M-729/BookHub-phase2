import React, { useState } from "react";
import BookCard from "../components/BookCard";

function Books({ onAddToCart, books = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredBooks = books.filter((book) => {
    const matchesSearch = (book.title || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Browse Our Collection</h1>
        <p className="text-gray-600 text-lg">Explore our extensive catalog of books</p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search about your favorite book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-xl text-gray-600">No books found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;