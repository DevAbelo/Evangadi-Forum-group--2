import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Layout from "./Components/Layout/Layout"
import Home from "./pages/Home/Home"
import Questions from "./pages/Questions/Questions"
import Answer from "./pages/Answer/Answer"
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/question" element={<Questions/>}/>
          <Route path="/home/:questionId" element={<Answer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
