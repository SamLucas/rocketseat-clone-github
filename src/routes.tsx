import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GloabalStyle from "./styles/globalStyles";

import Header from "./components/Header";

import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

import "react-calendar-heatmap/dist/styles.css";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      <GloabalStyle />
    </BrowserRouter>
  );
}
