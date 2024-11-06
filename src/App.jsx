import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api/main" element={<MainPage />} />
        <Route path="/api/main/:id" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
