import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "").toLowerCase();

  const [sale, setSale] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
    freeShipping: false,
    freeDuty: false,
  });

  useEffect(() => {
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
  }, [sale, category, priceRange]);

  const handlePriceChange = (field, value) => {
    setPriceRange((prev) => ({ ...prev, [field]: value }));
  };

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
    categoryTitles[currentPath] || {
      breadcrumb: "ModeSens / Products",
      title: "All Designer Products",
      desc: "Shop authentic designer items from 800+ stores.",
    };

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
          />

          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Top Discount</option>
          </select>
        </div>
      </div>
    </div>
  );
}
