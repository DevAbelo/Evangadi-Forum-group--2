import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Answer from "./pages/Answer/Answer";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Answer" element={<Answer />} />
      </Routes>
    </div>
  );
}
export default App;