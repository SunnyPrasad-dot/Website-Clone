// src/components/ProductPage/ProductPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";
import { useSearch } from "../../context/SearchContext";
import { CategoryHeader } from "./CategoryHeader";
import "./ProductPage.css";

/*
  Robust ProductPage:

  - Watches location.pathname and params.category and forces filter updates.
  - Does NOT require component remount to apply a new category.
  - Adds small console debug logs to inspect behavior.
*/

export default function ProductPage() {
  const params = useParams(); // may be undefined if route doesn't include param
  const location = useLocation();

  // categoryParam derived from param OR from pathname fallback
  const routeCategory = (params?.category || "").toString().toLowerCase();
  // fallback: if params missing, derive from pathname second segment
  const fallbackCategory = (() => {
    const parts = (location.pathname || "").split("/").filter(Boolean);
    return parts[0] ? parts[0].toLowerCase() : "";
  })();

  const categoryParam = routeCategory || fallbackCategory; // final reliable category token

  const {
    products,
    loading,
    fetchError,
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
  } = useSearch();

  const [localFilters, setLocalFilters] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // DEBUG: log route changes
  useEffect(() => {
    // Run every time pathname or params change
    console.info("[ProductPage] location.pathname:", location.pathname, "params.category:", params?.category);
  }, [location.pathname, params?.category]);

  // Reset filters/search/visible on route change
  useEffect(() => {
    console.info("[ProductPage] location.pathname changed ->", location.pathname);
    setSelectedBrand("");
    setSearchTerm("");
    setLocalFilters({});
    setVisibleCount(12);
    // ensure page top when navigating categories
    try { window.scrollTo({ top: 0, behavior: "auto" }); } catch (e) {}
  }, [location.pathname]);

  // Reset visible count when filters/search change
  useEffect(() => {
    setVisibleCount(12);
  }, [searchTerm, selectedBrand, localFilters, sortBy]);

  // Core filtering logic uses categoryParam (which updates on route change)
  const filtered = useMemo(() => {
    if (loading || !products?.length) return [];

    const q = (searchTerm || "").trim().toLowerCase();
    const brandFilter = (selectedBrand || "").trim().toLowerCase();

    let list = products.slice();

    // CATEGORY FILTER: top-level piece of product.category (left of '>')
    if (categoryParam) {
      list = list.filter((p) => {
        const cat = (p.category || "").toString().toLowerCase();
        const top = (cat.split(">")[0] || "").trim();
        return top.startsWith(categoryParam);
      });
    }

    // BRAND FILTER
    if (brandFilter) {
      list = list.filter((p) =>
        (p.brand || "").toString().toLowerCase().includes(brandFilter)
      );
    }

    // SEARCH TEXT FILTER
    if (q) {
      list = list.filter((p) => {
        const hay = `${p.title || ""} ${p.brand || ""} ${p.description || ""} ${p.category || ""}`.toLowerCase();
        return hay.includes(q);
      });
    }

    // LOCAL FILTERS (price/freeShipping etc)
    const lf = localFilters || {};
    if (lf.priceMin) list = list.filter((p) => +p.price >= +lf.priceMin);
    if (lf.priceMax) list = list.filter((p) => +p.price <= +lf.priceMax);
    if (lf.freeShipping) list = list.filter((p) => p.freeShipping);
    if (lf.freeDuty) list = list.filter((p) => p.freeDuty);

    // SORT
    if (sortBy === "price-asc") list.sort((a, b) => +a.price - +b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => +b.price - +a.price);
    else if (sortBy === "discount") list.sort((a, b) => (+b.discountPercent || 0) - (+a.discountPercent || 0));
    else if (sortBy === "newest") list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    // DEBUG: show how many matched
    console.debug(`[ProductPage] filtered count for '${categoryParam || "all"}' =`, list.length);
    return list;
  }, [products, loading, searchTerm, selectedBrand, categoryParam, localFilters, sortBy]);

  // fallback logic if filtered empty: relaxed match or default slice
  const finalList = useMemo(() => {
    if (filtered.length > 0) return filtered;

    const relaxed = (products || []).filter((p) => {
      const cat = (p.category || "").toLowerCase();
      return categoryParam && cat.includes(categoryParam);
    });

    if (relaxed.length > 0) return relaxed;

    // last fallback: show first 12 (or empty)
    return (products || []).slice(0, 12);
  }, [filtered, products, categoryParam]);

  const visible = finalList.slice(0, visibleCount);
  const handleLoadMore = () => setVisibleCount((c) => c + 12);

  // Render always page chrome so Back/Forward never shows blank
  return (
    <>
      <Navbar />

      <CategoryHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onFilterChange={(nf) => setLocalFilters((s) => ({ ...s, ...nf }))}
        resetFilters={() => setLocalFilters({})}
      />

      <div className="product-page d-flex">
        <FilterSidebar
          onFilterChange={(nf) => setLocalFilters((s) => ({ ...s, ...nf }))}
          resetSignal={localFilters}
        />

        <div className="flex-grow-1 px-3">
          {loading && <div>Loading products...</div>}
          {fetchError && <div className="text-danger">Error: {fetchError}</div>}

          {!loading && visible.length === 0 && (
            <div>No products found for this category.</div>
          )}

          <ProductGrid products={visible} />

          {finalList.length > visible.length && (
            <div className="text-center my-4">
              <button className="btn btn-outline-primary" onClick={handleLoadMore}>
                Load More ({Math.min(12, finalList.length - visible.length)} more)
              </button>
            </div>
          )}
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
