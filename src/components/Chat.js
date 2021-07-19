import React, { useEffect, useState, useRef } from "react";
import "firebase/auth";

import Navbar from "./Navigation/Navbar";
import Send from "../components/Send";
import { auth, db } from "../Firebase";
import "./Chat.css";

const Chat = () => {
  const scroll = useRef()
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(100)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="chat-page">
      <Navbar />
      <div className="messages">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            className={`message ${
              uid === auth.currentUser.uid ? "sender" : "receiver"
            }`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <Send scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
