import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { Car, X } from "lucide-react"; // Add `X` for close button

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: message,
      createdAt: serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div>
      {/* Floating Car Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition z-50 animate-bounce"
      >
        <Car className="w-6 h-6" />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center p-4 border-b bg-primary text-white rounded-t-lg">
            <span className="font-semibold text-lg">Live Chat</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 hover:text-gray-200" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="mb-2 bg-white px-3 py-2 rounded shadow-sm"
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex p-3 gap-2 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded"
            />
            <button
              type="submit"
              className="bg-primary text-white px-3 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
