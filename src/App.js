import React from "react";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'

import Chat from "./components/Chat";
import Login from "./components/Login";
import { auth } from "./Firebase";

import "./App.css";

function App() {
  const [user] = useAuthState(auth)

  return <div>{user ? <Chat /> : <Login />}</div>;
}

export default App;
