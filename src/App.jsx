import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./components/Login/login";
import ProductPage from "./components/ProductPage/ProductPage";


export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/women" element={<ProductPage />} />
  
          
        </Routes>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
