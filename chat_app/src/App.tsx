import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Main } from "./pages/main";
import { Login } from "./pages/Loginh";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;