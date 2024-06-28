import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppBar />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
