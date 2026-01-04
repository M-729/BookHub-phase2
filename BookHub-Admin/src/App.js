import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Dashboard from "./pages/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import { booksData } from "./data/booksData"; 

function App() {
  const [logged, setLogged] = useState(false);
  console.log('Admin App render', { logged });
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [useBackend, setUseBackend] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const startEdit = (book) => {
    setEditingId(book.id);
    setTitle(book.title || "");
    setAuthor(book.author || "");
    setPrice(book.price || "");
    setImage(book.image || book.cover || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setAuthor("");
    setPrice("");
    setImage("");
  };

  const updateBook = async () => {
    if (!editingId) return;
    await fetch(`http://localhost:5000/books/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, price, image })
    });
    cancelEdit();
    loadBooks();
  };
  const [cart, setCart] = useState([]);
  const [messages, setMessages] = useState([]);

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

  const loadMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/messages");
      const data = await res.json();
      setMessages(data || []);
    } catch (err) {
      setMessages([]);
    }
  };

  useEffect(() => {
    if (logged) {
      loadBooks();
      loadMessages();
    }
  }, [logged]);

  const addBook = async () => {
    if (useBackend) {
      await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, price, image })
      });

      setTitle("");
      setAuthor("");
      setPrice("");
      setImage("");
      loadBooks();
    } else {
      const maxId = books.length ? Math.max(...books.map((b) => b.id || 0)) : 0;
      const newBook = { id: maxId + 1, title, author, price: parseFloat(price) || price, image };
      setBooks((prev) => [...prev, newBook]);
      setTitle("");
      setAuthor("");
      setPrice("");
      setImage("");
    }
  };

  const delBook = async (id) => {
    if (useBackend) {
      await fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" });
      loadBooks();
    } else {
      setBooks((prev) => prev.filter((b) => b.id !== id));
    }
  };

  const delMessage = async (id) => {
    if (useBackend) {
      await fetch(`http://localhost:5000/messages/${id}`, { method: "DELETE" });
      loadMessages();
    } else {
      setMessages((prev) => prev.filter((m) => m.id !== id));
    }
  };

  const addToCart = (book) => {
    const priceNum = typeof book.price === "number" ? book.price : parseFloat(book.price) || 0;
    const existing = cart.find((item) => item.id === book.id);
    if (existing) {
      setCart(cart.map((item) => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { id: book.id, title: book.title, author: book.author, price: priceNum, cover: book.image || book.cover || "", quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  if (!logged) {
    return <Login onLogin={() => setLogged(true)} />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar onLogout={() => setLogged(false)} cartCount={cart.length} />
        <main className="main-content py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>

            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home onAddToCart={addToCart} books={books} />} />
                <Route path="/books" element={<Books onAddToCart={addToCart} books={books} isAdmin={true} onDelete={delBook} />} />
                <Route path="/dashboard" element={<Dashboard books={books} messages={messages} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} price={price} setPrice={setPrice} image={image} setImage={setImage} addBook={addBook} delBook={delBook} startEdit={startEdit} editingId={editingId} updateBook={updateBook} cancelEdit={cancelEdit} delMessage={delMessage} />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />
              </Routes>
            </ErrorBoundary>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
