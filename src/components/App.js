
import React from "react";
import './../styles/App.css';
import AuthProvider from "../context/AuthContext";
import Auth from "./Auth";

const App = () => {
  return (
    <AuthProvider>
      <Auth/>
    </AuthProvider>
  )
}

export default App
