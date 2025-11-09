// src/context/SearchContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchProductsFromFirebase } from "../lib/firebase";
import { useLocation } from "react-router-dom";

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();

  // ✅ Fetch data once initially
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchProductsFromFirebase()
      .then((arr) => {
        if (!mounted) return;
        const normalized = (arr || []).map((p, i) => {
          const priceRaw = p.price ?? p.priceFormatted ?? p.discountedPrice ?? "";
          const price =
            typeof priceRaw === "number"
              ? priceRaw
              : parseFloat(String(priceRaw).replace(/[^0-9.]/g, "")) || 0;

          const discountPercent =
            p.discountPercent ??
            (p.discount ? Number(String(p.discount).replace(/[^0-9]/g, "")) || 0 : 0);

          return {
            id: p.id ?? p.key ?? `p_${i}`,
            title: (p.title ?? p.name ?? "").toString(),
            brand: (p.brand ?? p.designer ?? "").toString(),
            image:
              p.image ??
              p.imageUrl ??
              p.thumbnail ??
              "https://via.placeholder.com/300x300?text=No+Image",
            price,
            discountPercent,
            category: (p.category ?? p.gender ?? p.type ?? "").toString(),
            freeShipping: !!p.freeShipping,
            freeDuty: !!p.freeDuty,
            description: p.description ?? p.desc ?? "",
            ...p,
          };
        });

        // dedupe brands
        const brandSet = new Set();
        normalized.forEach((it) => {
          const b = (it.brand || "").trim();
          if (b) brandSet.add(b);
        });

        setProducts(normalized);
        setBrands(Array.from(brandSet).sort((a, b) => a.localeCompare(b)));
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setFetchError(err.message || String(err));
        setProducts([]);
        setBrands([]);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // ✅ Reset search and brand when category route changes
  useEffect(() => {
    setSearchTerm("");
    setSelectedBrand("");
    setSearchOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time user switches /women, /men, /kids, etc.

  return (
    <SearchContext.Provider
      value={{
        products,
        brands,
        loading,
        fetchError,
        searchTerm,
        setSearchTerm,
        selectedBrand,
        setSelectedBrand,
        searchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside SearchProvider");
  return ctx;
}
