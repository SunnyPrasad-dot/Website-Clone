import React, { useState, useEffect } from "react";
import "./CategoryHeader.css";

export function CategoryHeader({ resetFilters, onFilterChange }) {
  const [sale, setSale] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
    freeShipping: false,
    freeDuty: false
  });

  useEffect(() => {
    onFilterChange({
      sale,
      category,
      priceMin: priceRange.min,
      priceMax: priceRange.max,
      freeShipping: priceRange.freeShipping,
      freeDuty: priceRange.freeDuty
    });
  }, [sale, category, priceRange, onFilterChange]);

  const handlePriceChange = (field, value) => {
    setPriceRange((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="category-header">
      <div className="breadcrumb">ModeSens / Women</div>
      <h2 className="page-title">Women's Fashion & Designer Products</h2>
      <p className="page-desc">
        Shop authentic designer fashion for women. Discover the best prices from 800+ stores.
      </p>

      <div className="filter-bar">
        {/* Sale */}
        <div className="dropdown">
          <button className="dropdown-btn">Sale</button>
          <div className="dropdown-menu">
            {["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%"].map((d) => (
              <div
                key={d}
                onClick={() => setSale(d)}
                className={`dropdown-item ${sale === d ? "active" : ""}`}
              >
                {d} Off
              </div>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="dropdown">
          <button className="dropdown-btn">Category</button>
          <div className="dropdown-menu">
            {["Clothing", "Shoes", "Bags", "Accessories", "Beauty", "Home"].map((c) => (
              <div
                key={c}
                onClick={() => setCategory(c)}
                className={`dropdown-item ${category === c ? "active" : ""}`}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="dropdown">
          <button className="dropdown-btn">Price Range</button>
          <div className="dropdown-menu price-dropdown">
            <div className="range-inputs">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
              />
            </div>
            <label>
              <input
                type="checkbox"
                checked={priceRange.freeShipping}
                onChange={(e) => handlePriceChange("freeShipping", e.target.checked)}
              />{" "}
              Free Shipping
            </label>
            <label>
              <input
                type="checkbox"
                checked={priceRange.freeDuty}
                onChange={(e) => handlePriceChange("freeDuty", e.target.checked)}
              />{" "}
              Free Duty
            </label>
          </div>
        </div>

        <button className="reset-btn" onClick={resetFilters}>Reset</button>
      </div>
    </div>
  );
}
