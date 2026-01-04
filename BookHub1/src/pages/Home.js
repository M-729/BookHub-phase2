import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

function Home({ onAddToCart, books = [] }) {
  const featuredBooks = (books || []).slice(0, 6);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-24 px-4 text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to BookHub</h1>
          <p className="text-xl md:text-2xl opacity-95">Discover the knowledge from your trusted store!</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">High quality</h3>
            <p className="text-gray-600">The official versions of books</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive prices on all titles</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-gray-600">Safe and encrypted transactions</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/books" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-colors inline-block">
            View All Books
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;