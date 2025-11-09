// src/components/ProductPage/CategoryHeader.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryHeader.css";

export function CategoryHeader({
  resetFilters,
  onFilterChange,
  resetSignal = {},
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}) {
  const { category: urlCategory } = useParams();
  const [sale, setSale] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
    freeShipping: false,
    freeDuty: false,
  });

  useEffect(() => {
    // Reset local state when resetSignal changes
    if (resetSignal && Object.keys(resetSignal).length > 0) {
      setSale("");
      setCategory("");
      setPriceRange({
        min: "",
        max: "",
        freeShipping: false,
        freeDuty: false,
      });
    }
  }, [resetSignal]);

  useEffect(() => {
    onFilterChange({
      sale,
      category,
      priceMin: priceRange.min,
      priceMax: priceRange.max,
      freeShipping: priceRange.freeShipping,
      freeDuty: priceRange.freeDuty,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sale, category, priceRange]);

  const handlePriceChange = (field, value) => {
    setPriceRange((prev) => ({ ...prev, [field]: value }));
  };

  // Dynamic content based on category
  const categoryTitles = {
    women: {
      breadcrumb: "ModeSens / Women",
      title: "Women's Fashion & Designer Products",
      desc: "Shop authentic designer fashion for women. Discover the best prices from 800+ stores.",
    },
    men: {
      breadcrumb: "ModeSens / Men",
      title: "Men's Fashion & Designer Products",
      desc: "Shop authentic designer fashion for men. Discover the best prices from 800+ stores.",
    },
    kids: {
      breadcrumb: "ModeSens / Kids",
      title: "Kids' Fashion & Designer Products",
      desc: "Shop authentic designer fashion for kids. Discover the best prices from 800+ stores.",
    },
    beauty: {
      breadcrumb: "ModeSens / Beauty",
      title: "Beauty & Designer Products",
      desc: "Shop authentic designer beauty products. Discover the best prices from 800+ stores.",
    },
    accessories: {
      breadcrumb: "ModeSens / Accessories",
      title: "Accessories & Designer Products",
      desc: "Shop authentic designer accessories. Discover the best prices from 800+ stores.",
    },
  };

  const currentCategory =
    categoryTitles[urlCategory?.toLowerCase()] || categoryTitles.women;

  return (
    <div className="category-header p-3 border-bottom bg-white">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
        <div style={{ flex: 1 }}>
          <div className="breadcrumb">{currentCategory.breadcrumb}</div>
          <h2 className="page-title">{currentCategory.title}</h2>
          <p className="page-desc">{currentCategory.desc}</p>
        </div>

        <div style={{ minWidth: 280 }} className="d-flex gap-2 align-items-center">
          <input
            type="search"
            className="form-control"
            placeholder="Search products, brands, descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search products"
          />

          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
          >
            <option value="">Sort</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Top Discount</option>
          </select>
        </div>
      </div>

      <div className="filter-bar mt-3 container-fluid d-flex gap-2 align-items-center">
        {/* Sale */}
        <div className="dropdown">
          <button className="dropdown-btn">Sale: {sale ? `${sale}% Off` : "All Items"}</button>
          <div className="dropdown-menu">
            <div onClick={() => setSale("")} className={`dropdown-item ${sale === "" ? "active" : ""}`}>All Items</div>
            {["10", "20", "30", "40", "50", "60", "70", "80"].map((d) => (
              <div key={d} onClick={() => setSale(d)} className={`dropdown-item ${sale === d ? "active" : ""}`}>{d}% Off</div>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="dropdown">
          <button className="dropdown-btn">Category: {category || "All"}</button>
          <div className="dropdown-menu">
            <div onClick={() => setCategory("")} className={`dropdown-item ${category === "" ? "active" : ""}`}>All Categories</div>
            {["Clothing", "Shoes", "Bags", "Accessories", "Beauty", "Home"].map((c) => (
              <div key={c} onClick={() => setCategory(c)} className={`dropdown-item ${category === c ? "active" : ""}`}>{c}</div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="dropdown">
          <button className="dropdown-btn">Price Range</button>
          <div className="dropdown-menu price-dropdown">
            <div className="range-inputs d-flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="form-control"
                value={priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="form-control"
                value={priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
              />
            </div>

            <label className="d-flex gap-2 align-items-center mt-2">
              <input
                type="checkbox"
                checked={priceRange.freeShipping}
                onChange={(e) => handlePriceChange("freeShipping", e.target.checked)}
              />
              Free Shipping
            </label>

            <label className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                checked={priceRange.freeDuty}
                onChange={(e) => handlePriceChange("freeDuty", e.target.checked)}
              />
              Free Duty
            </label>
          </div>
        </div>

        <button className="btn btn-outline-secondary" onClick={resetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
}
