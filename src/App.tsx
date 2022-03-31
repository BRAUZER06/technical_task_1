import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />

        <Route path="/FavoritePage" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default App;
