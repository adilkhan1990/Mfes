import React, { useState } from "react";

export default function ToastService() {
  const [messages, setMessages] = useState([]);

  const addToast = (message) => {
    setMessages((prev) => [...prev, message]);
    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg !== message));
    }, 3000); // Auto dismiss after 3 seconds
  };

  window.showToast = (message) => addToast(message); // Expose the function globally for other microfrontends to use

  return (
    <div className="toast-container" style={toastContainerStyle}>
      {messages.map((message, index) => (
        <div key={index} className="toast" style={toastStyle}>
          {message}
        </div>
      ))}
    </div>
  );
}

const toastContainerStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
};

const toastStyle = {
  background: "rgba(0, 0, 0, 0.8)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  marginBottom: "10px",
};
