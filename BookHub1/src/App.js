import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { booksData } from "./data/booksData";



function App() {
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]);
  const [useBackend, setUseBackend] = useState(true);

  const loadBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      if (data && data.length > 0) {
        setBooks(data);
        setUseBackend(true);
      } else {
        setBooks(booksData);
        setUseBackend(false);
      }
    } catch (err) {
      
      setBooks(booksData);
      setUseBackend(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const addToCart = (book) => {
    const existingItem = cart.find((item) => item.id === book.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
    alert(`${book.title} added to cart!`);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  

  return (
    <Router>
      <div className="App">
       <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} books={books} />} />
            <Route path="/books" element={<Books onAddToCart={addToCart} books={books} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onUpdateQuantity={updateQuantity}
                  onRemoveFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
