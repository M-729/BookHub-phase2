import React, { useState } from "react";
import { booksData } from "../data/booksData";
import BookCard from "../components/BookCard";

function Books({ onAddToCart, books = null, isAdmin = false, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const data = books && books.length ? books : booksData;

  const filteredBooks = data.filter((book) => {
    const title = (book.title || "").toString();
    const matchesSearch = title.toLowerCase().includes((searchTerm || "").toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12">
        <div className="py-12 px-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Browse Our Collection</h1>
          <p className="text-lg md:text-xl opacity-95">Explore our extensive catalog of books</p>
        </div>
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
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} isAdmin={isAdmin} onDelete={onDelete} />
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