import React, { useState } from "react";
import API from "../../api/axiosInstance"

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const newChat = [...chat, { sender: "user", text: message }];
    setChat(newChat);

    try {
      const res = await API.post("/api/chat", { message });
      const botReply = res.data.reply;
      setChat([...newChat, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
    }

    setMessage("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Ayurvedic Chatbot</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "400px", overflowY: "auto" }}>
        {chat.map((msg, i) => (
          <p key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>
      <input
        style={{ width: "80%", padding: "10px" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about Panchakarma..."
      />
      <button style={{ width: "18%", padding: "10px" }} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default App;
