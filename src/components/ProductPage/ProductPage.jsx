import React, { useState } from "react";
import "./ProductPage.css";
import productsData from "../../Data/productsData";
import { CategoryHeader } from "./CategoryHeader";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

export default function ProductPage() {
  const [filters, setFilters] = useState({
    sale: "",
    category: "",
    priceMin: "",
    priceMax: "",
    freeShipping: false,
    freeDuty: false,
    gender: [],
    designer: [],
    color: [],
    condition: [],
    discount: [],
    store: []
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  // When sidebar or topbar changes filters
  const handleFilterChange = (newFilters) =>
    setFilters((prev) => ({ ...prev, ...newFilters }));

  // Reset filters
  const handleResetFilters = () =>
    setFilters({
      sale: "",
      category: "",
      priceMin: "",
      priceMax: "",
      freeShipping: false,
      freeDuty: false,
      gender: [],
      designer: [],
      color: [],
      condition: [],
      discount: [],
      store: []
    });

  // Core filtering logic
  const filteredProducts = productsData.filter((product) => {
    const match = (key, val) => {
      if (!val || val.length === 0) return true;
      if (Array.isArray(filters[key])) return filters[key].includes(product[key]);
      return String(product[key])?.toLowerCase().includes(String(val).toLowerCase());
    };

    const rawPrice =
  typeof product.price === "string"
    ? product.price
    : String(product.price || "0");

const price = parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0;

    const withinPrice =
      (!filters.priceMin || price >= filters.priceMin) &&
      (!filters.priceMax || price <= filters.priceMax);

    return (
      match("category", filters.category) &&
      match("designer") &&
      match("color") &&
      match("condition") &&
      match("store") &&
      withinPrice
    );
  });

  return (
    <>
      <Navbar />

      {/* Top filter bar */}
      <CategoryHeader
        resetFilters={handleResetFilters}
        onFilterChange={handleFilterChange}
      />

      <div className="product-page d-flex">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="flex-grow-1">
          <ProductGrid
            products={filteredProducts}
            onQuickView={setSelectedProduct}
          />
        </div>
      </div>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Footer />
    </>
  );
}
