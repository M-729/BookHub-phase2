import React, { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/messages");
      const data = await res.json();
      setMessages(data || []);
    } catch (err) {
      setMessages([]);
    }
  };

  const delMessage = async (id) => {
    try {
      await fetch(`http://localhost:5000/messages/${id}`, { method: "DELETE" });
      loadMessages();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Messages</h1>

      {messages.length === 0 ? (
        <p className="text-gray-600">No messages yet.</p>
      ) : (
        messages.map((m) => (
          <div key={m.id} className="border p-4 mb-2 rounded">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{m.name} <span className="text-sm text-gray-500">({m.email})</span></p>
                <p className="mt-2">{m.message}</p>
                <p className="text-xs text-gray-400 mt-2">{m.created_at}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button onClick={() => delMessage(m.id)} className="text-red-500">Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}