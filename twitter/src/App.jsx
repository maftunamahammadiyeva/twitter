import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sitebar from "./components/Sitebar/Sitebar";
import Login from "./components/Login/Login";
import Profil from "./components/Profil/Profil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-nowrap align-items-start position-relative">
        <Sitebar />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/profil" elemant={<Profil />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
