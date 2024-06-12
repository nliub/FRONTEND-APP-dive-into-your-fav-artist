import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/videos/:id" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
