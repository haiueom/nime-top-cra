import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/tailwind.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Character from "./pages/Character";
import Team from "./pages/Teams";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Container>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/character" element={<Character />} />
          <Route path="/teams" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
