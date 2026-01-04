import React from "react";

function BookCard({ book = {}, onAddToCart }) {
  const imageSrc = book.image || book.cover || "";
  const title = book.title || "Untitled";
  const author = book.author || "Unknown";
  const priceNum = typeof book.price === "number" ? book.price : (book.price ? parseFloat(book.price) : 0);
  const priceDisplay = Number.isFinite(priceNum) ? priceNum.toFixed(2) : "0.00";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <img src={imageSrc} alt={title} className="w-full h-72 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-12">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {author}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">${priceDisplay}</p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 mt-auto active:scale-95 disabled:opacity-50"
          onClick={() => onAddToCart && onAddToCart(book)}
          disabled={!onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;