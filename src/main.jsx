import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import App from "./App.jsx";
import Create from "./Create.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="app" >
        {/* <App />  */}
        <Routes>
          <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />  }/>

        </Routes>
    </Router>
  </React.StrictMode>
);
