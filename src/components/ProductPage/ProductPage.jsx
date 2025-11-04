import React, { useState } from "react";
import "./ProductPage.css";
import productsData from "../../Data/productsData";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";
import Navbar from "../Navbar/navbar";      // adjust path as needed
import Footer from "../Footer/Footer";      // adjust path as needed

export default function ProductPage() {
  const [filters, setFilters] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const handleFilterChange = (updated) => setFilters(updated);
  const handleProductClick = (p) => setSelectedProduct(p);
  const handleFavorite = (msg) => setToastMsg(msg);

  const filteredProducts = productsData;

  return (
    <>
      <Navbar />

      <div className="product-page d-flex">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="flex-grow-1">
          <ProductGrid
            products={filteredProducts}
            onQuickView={handleProductClick}
            onFavorite={handleFavorite}
          />
        </div>
      </div>

      <Footer />

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </>
  );
}
