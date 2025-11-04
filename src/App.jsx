import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { FilterProvider } from "./context/FilterContext";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./components/Login/login";
import ProductPage from "./components/ProductPage/ProductPage";

export function App() {
  return (
    <AuthProvider>
      <FilterProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/women" element={<ProductPage />} />
            <Route path="/men" element={<ProductPage />} />
            <Route path="/beauty" element={<ProductPage />} />
            {/* you can add other categories here */}
          </Routes>
        </Router>
      </FilterProvider>
    </AuthProvider>
  );
}

export default App;
