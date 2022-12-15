import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup } from "../pages/Home";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);
