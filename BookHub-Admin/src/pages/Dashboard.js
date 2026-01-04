import React from "react";

function Dashboard({ books = [], messages = [], delMessage, title, setTitle, author, setAuthor, price, setPrice, image, setImage, addBook, delBook, startEdit, editingId, updateBook, cancelEdit }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12">
        <div className="py-12 px-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-lg md:text-xl opacity-95">BookHub Store between your hands!</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Add Book</h2>
        <div className="flex gap-2 flex-wrap">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-2" />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="border p-2" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="border p-2" />
          <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="border p-2" />
          {editingId ? (
            <>
              <button onClick={updateBook} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
              <button onClick={cancelEdit} className="ml-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
            </>
          ) : (
            <button onClick={addBook} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">All Books</h2>
        {books.map((b) => {
          const imageSrc = b.image || b.cover || "";
          const priceVal = typeof b.price === "number" ? b.price.toFixed(2) : b.price;
          return (
            <div key={b.id} className="border p-4 mb-2 flex gap-4">
              <img src={imageSrc} alt={b.title} className="w-24 h-24 object-cover" />
              <div>
                <h3 className="font-bold">{b.title}</h3>
                <p>{b.author}</p>
                <p className="text-green-600">${priceVal}</p>
                <div className="flex gap-4">
                  <button onClick={() => startEdit(b)} className="text-blue-500">Edit</button>
                  <button onClick={() => delBook(b.id)} className="text-red-500">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Messages section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        {(!Array.isArray(messages) || messages.length === 0) ? (
          <p className="text-gray-600">No messages yet.</p>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="border p-4 mb-2 rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{m.name} <span className="text-sm text-gray-500">({m.email})</span></p>
                  <p className="mt-2">{m.message}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button onClick={() => delMessage(m.id)} className="text-red-500">Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;