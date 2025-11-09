// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { FilterProvider } from "./context/FilterContext";
import { SearchProvider } from "./context/SearchContext";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./components/Login/login";
import ProductPage from "./components/ProductPage/ProductPage";

function RoutedApp() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/:category" element={<ProductPage />} />
    </Routes>
  );
}

export function App() {
  return (
    <AuthProvider>
      <FilterProvider>
        {/* ✅ Router wraps SearchProvider so useLocation() works */}
        <Router>
          <SearchProvider>
            <RoutedApp />
          </SearchProvider>
        </Router>
      </FilterProvider>
    </AuthProvider>
  );
}

export default App;
