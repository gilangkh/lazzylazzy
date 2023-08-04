/** @format */

import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Shop />} />
    </Routes>
  </Router>
  );
}

export default App;
