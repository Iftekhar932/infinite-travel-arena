import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
