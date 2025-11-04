import React, { useState } from "react";
import "./ProductPage.css";
// NOTE: productsData import assumes path is correct
import productsData from "../../Data/productsData"; 
import { CategoryHeader } from "./CategoryHeader";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

export default function ProductPage() {
  const [filters, setFilters] = useState({
    sale: "", // Top-bar minimum discount percentage (e.g., "10")
    category: "", // Top-bar category string (e.g., "Clothing")
    priceMin: "",
    priceMax: "",
    freeShipping: false,
    freeDuty: false,
    gender: [], // Sidebar multi-select array (e.g., ["Women", "Men"])
    subCategory: [], // Sidebar subCategory array
    designer: [],
    color: [],
    condition: [],
    discount: [], // Sidebar multi-select min discount array (e.g., ["10", "20"])
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
      subCategory: [],
      designer: [],
      color: [],
      condition: [],
      discount: [],
      store: []
    });

  // Core filtering logic
  const filteredProducts = productsData.filter((product) => {
    
    // Helper function for array filters (gender, designer, color, etc.)
    const checkArrayFilter = (filterKey, productPropertyKey) => {
      const selectedValues = filters[filterKey];
      
      // Pass if no filter is selected for this key
      if (!selectedValues || selectedValues.length === 0) {
        return true;
      }
      
      const productValue = String(product[productPropertyKey] || "").toLowerCase();
      
      // Check if the product's value (e.g., "Dior") matches or is included in ANY of the selected filter values
      return selectedValues.some(filterVal => {
        const filterStr = String(filterVal).toLowerCase();
        
        // Use 'includes' for broader filtering (e.g., matching "Women" in "Women > Dresses")
        return productValue.includes(filterStr);
      });
    };
    
    // --- 1. Price Range Logic ---
    const rawPrice =
      typeof product.price === "string"
        ? product.price
        : String(product.price || "0");
    const price = parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0;

    const withinPrice =
      (!filters.priceMin || price >= Number(filters.priceMin)) &&
      (!filters.priceMax || price <= Number(filters.priceMax));

    // --- 2. Discount/Sale Logic (Combined Top Bar and Sidebar) ---
    const productDiscount = product.discountPercent || 0;
    
    // Get the minimum discount from the Top Bar (e.g., 20)
    const minTopDiscount = Number(filters.sale) || 0;
    
    // Get all minimum discounts from the Sidebar (e.g., [10, 30])
    const sidebarMinDiscounts = filters.discount.map(Number);

    // Combine all required minimum discounts (if multiple are selected, we want the product to satisfy at least one of the sidebar requirements, AND the top-bar requirement if set)
    
    // Filter must pass if product discount is >= the minimum set by the top bar
    const matchTopSale = productDiscount >= minTopDiscount;

    // Filter must pass if the product discount is >= at least one of the selected sidebar discounts (if any are selected)
    const matchSidebarDiscount = 
      sidebarMinDiscounts.length === 0 || 
      sidebarMinDiscounts.some(min => productDiscount >= min);


    // --- 3. Top-Bar Category Filter ---
    const matchTopCategory = 
      !filters.category || 
      String(product.category || "")
        .toLowerCase()
        .includes(String(filters.category).toLowerCase());
        
    // --- 4. Free Shipping/Duty ---
    // Assuming product data has boolean fields for freeShipping and freeDuty
    const matchShipping = !filters.freeShipping || product.freeShipping === true;
    const matchDuty = !filters.freeDuty || product.freeDuty === true;

    // --- 5. Sidebar Array Filters ---
    const matchGender = checkArrayFilter('gender', 'category');
    const matchSubCategory = checkArrayFilter('subCategory', 'category');
    const matchDesigner = checkArrayFilter('designer', 'brand');
    const matchColor = checkArrayFilter('color', 'color'); // Requires product.color field
    const matchCondition = checkArrayFilter('condition', 'condition'); // Requires product.condition field
    const matchStore = checkArrayFilter('store', 'store'); // Requires product.store field

    // --- Final Check (All must be true) ---
    return (
      withinPrice &&
      matchTopCategory &&
      matchTopSale &&
      matchSidebarDiscount &&
      matchShipping &&
      matchDuty &&
      matchGender &&
      matchSubCategory &&
      matchDesigner &&
      matchColor &&
      matchCondition &&
      matchStore
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
        {/* Pass the current filters state as a reset signal to FilterSidebar */}
        <FilterSidebar 
            onFilterChange={handleFilterChange} 
            resetSignal={filters} 
        />
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