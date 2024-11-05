import React, { useState } from "react";
import Color from "./Color/Color";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Color />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
