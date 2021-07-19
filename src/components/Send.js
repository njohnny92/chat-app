import React, { useState } from "react";
import firebase from "firebase";

import { auth, db } from "../Firebase";
import Button from "./FormElements/Button";

import './Send.css'

const Send = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    try {
      await db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMessage">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Send a message..."
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default Send;
