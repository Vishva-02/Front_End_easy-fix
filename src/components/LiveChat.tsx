import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, LogIn } from "lucide-react"; // Import the LogIn icon

// Define the shape of a message for TypeScript
interface IMessage {
  user: string;
  text: string;
}

const LiveChat = () => {
  // --- NEW STATE ---
  const [userName, setUserName] = useState("");
  const [isChatActive, setIsChatActive] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // --- UPDATED USEEFFECT ---
  useEffect(() => {
    // Only connect if the user has entered their name and started the chat
    if (isChatActive && userName) {
      socketRef.current = io('http://localhost:3000');

      // NEW: Announce that a user with a name has joined
      socketRef.current.emit('userJoinsChat', { name: userName });

      // Listen for messages from the admin
      socketRef.current.on('receiveMessage', (message: IMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      // Cleanup on component unmount
      return () => {
        socketRef.current?.disconnect();
      };
    }
  }, [isChatActive, userName]); // Dependency array updated

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- UPDATED SENDMESSAGE ---
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim() && socketRef.current) {
      // Send the user's actual name to the server for the admin
      const messageData = { user: userName, text: currentMessage };
      socketRef.current.emit('sendMessage', messageData);

      // Add our own message to the UI using "You" for better UX
      const myMessage = { user: 'You', text: currentMessage };
      setMessages((prev) => [...prev, myMessage]);
      setCurrentMessage("");
    }
  };

  // --- NEW: FUNCTION TO HANDLE JOINING THE CHAT ---
  const handleJoinChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setUserName(nameInput);
      setIsChatActive(true); // This will trigger the useEffect to connect
    }
  };

  // --- NEW: CONDITIONAL UI FOR NAME ENTRY ---
  if (!isChatActive) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col h-96">
        <div className="bg-gray-100 p-3 rounded-t-lg border-b">
          <h3 className="font-semibold text-center text-gray-800">Live Support Chat</h3>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center items-center gap-4">
          <h4 className="text-lg font-medium">Enter your name to start</h4>
          <form onSubmit={handleJoinChat} className="w-full max-w-sm flex items-center gap-2">
            <Input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Your Name..."
              autoComplete="off"
              required
            />
            <Button type="submit" size="icon">
              <LogIn className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // --- EXISTING CHAT UI (WITH MINOR TWEAK) ---
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col h-96">
      <div className="bg-gray-100 p-3 rounded-t-lg border-b">
        <h3 className="font-semibold text-center text-gray-800">Chat with Support</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.user === 'You' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${msg.user === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <p className="text-xs font-bold mb-1">{msg.user}</p> {/* Shows "You" or "Admin" */}
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="p-3 border-t bg-gray-50 flex items-center gap-2">
        <Input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          autoComplete="off"
        />
        <Button type="submit" size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default LiveChat;