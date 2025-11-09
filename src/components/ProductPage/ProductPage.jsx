// src/components/ProductPage/ProductPage.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

import { fetchProductsFromFirebase } from "../../lib/firebase";
import { CategoryHeader } from "./CategoryHeader";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

export default function ProductPage() {
  const { category: urlCategory } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [filters, setFilters] = useState({
    sale: "", // topbar min discount
    category: "", // topbar category
    priceMin: "",
    priceMax: "",
    freeShipping: false,
    freeDuty: false,
    gender: [], // e.g., ["Women"]
    subCategory: [],
    designer: [],
    color: [],
    condition: [],
    discount: [], // sidebar discounts
    store: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(""); // "", "newest", "price-asc", "price-desc", "discount"

  const [selectedProduct, setSelectedProduct] = useState(null);

  // load products once
  useEffect(() => {
    let mounted = true;
    setLoadingProducts(true);
    fetchProductsFromFirebase()
      .then((arr) => {
        if (!mounted) return;
        // normalize each product a bit
        const normalized = (arr || []).map((p, idx) => {
          // ensure required fields exist
          const priceRaw = p.price ?? p.priceFormatted ?? p.discountedPrice ?? "";
          const price =
            typeof priceRaw === "number"
              ? priceRaw
              : parseFloat(String(priceRaw).replace(/[^0-9.]/g, "")) || 0;

          const discountPercent =
            p.discountPercent ??
            (p.discount
              ? Number(String(p.discount).replace(/[^0-9]/g, "")) || 0
              : 0);

          return {
            // ensure id
            id: p.id ?? p.key ?? p._id ?? `p_${idx}`,
            title: p.title ?? p.name ?? "",
            brand: p.brand ?? p.designer ?? "",
            image:
              p.image ??
              p.imageUrl ??
              p.thumbnail ??
              "https://via.placeholder.com/300x300?text=No+Image",
            price,
            priceRaw: priceRaw,
            discountedPrice: p.discountedPrice ?? p.price ?? p.priceRaw ?? price,
            discountPercent,
            category: (p.category ?? p.gender ?? p.type ?? "").toString(),
            color: p.color ?? p.colour ?? "",
            condition: p.condition ?? "",
            freeShipping: !!p.freeShipping,
            freeDuty: !!p.freeDuty,
            store: p.store ?? "",
            description: p.description ?? p.desc ?? "",
            storeCount: p.storeCount ?? 1,
            ...p,
          };
        });
        setAllProducts(normalized);
        setLoadingProducts(false);
      })
      .catch((err) => {
        setFetchError(err.message || String(err));
        setAllProducts([]);
        setLoadingProducts(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Set initial gender filter based on URL category (women/men/etc.)
  useEffect(() => {
    if (urlCategory) {
      const categoryMap = {
        women: ["Women"],
        men: ["Men"],
        kids: ["Kids"],
        beauty: ["Beauty"],
        accessories: ["Accessories"],
      };
      const genderFilter = categoryMap[urlCategory.toLowerCase()] || [];
      setFilters((prev) => ({ ...prev, gender: genderFilter }));
    }
  }, [urlCategory]);

  // Handle filter updates from child components
  const handleFilterChange = (newFilters) =>
    setFilters((prev) => ({ ...prev, ...newFilters }));

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
      store: [],
    });

  // ---------- filtering logic ----------
  const filteredProducts = useMemo(() => {
    if (loadingProducts) return [];

    const f = filters;

    // helper for checking array-based filters
    const checkArrayFilter = (filterKey, productFieldKey) => {
      const selected = f[filterKey];
      if (!selected || selected.length === 0) return true;
      const prodVal = String((productFieldKey && prod[productFieldKey]) || "")
        .toLowerCase();

      // We'll implement individually where needed
      return true;
    };

    const list = allProducts.filter((prod) => {
      // price
      const price = Number(prod.price || 0);
      if (f.priceMin && price < Number(f.priceMin)) return false;
      if (f.priceMax && price > Number(f.priceMax)) return false;

      // top-bar sale
      const prodDiscount = Number(prod.discountPercent || 0);
      if (f.sale && prodDiscount < Number(f.sale)) return false;

      // sidebar discounts: require product discount >= at least one selected
      if (f.discount && f.discount.length > 0) {
        const any = f.discount.some((d) => prodDiscount >= Number(d));
        if (!any) return false;
      }

      // top-bar category string match
      if (f.category) {
        const cat = String(prod.category || "").toLowerCase();
        if (!cat.includes(String(f.category).toLowerCase())) return false;
      }

      // free shipping / duty
      if (f.freeShipping && !prod.freeShipping) return false;
      if (f.freeDuty && !prod.freeDuty) return false;

      // gender filter (category in product may contain "Women" or "Women > Dresses")
      if (f.gender && f.gender.length > 0) {
        const prodCat = String(prod.category || "").toLowerCase();
        const matchesGender = f.gender.some((g) =>
          prodCat.includes(String(g).toLowerCase())
        );
        if (!matchesGender) return false;
      }

      // subCategory: check product.category or prod.subCategory or prod.type
      if (f.subCategory && f.subCategory.length > 0) {
        const prodCat = String(prod.category || prod.subCategory || "").toLowerCase();
        if (
          !f.subCategory.some((sc) =>
            prodCat.includes(String(sc).toLowerCase())
          )
        )
          return false;
      }

      // designer/brand
      if (f.designer && f.designer.length > 0) {
        const brand = String(prod.brand || "").toLowerCase();
        if (!f.designer.some((d) => brand.includes(String(d).toLowerCase())))
          return false;
      }

      // color
      if (f.color && f.color.length > 0) {
        const color = String(prod.color || "").toLowerCase();
        if (!f.color.some((c) => color.includes(String(c).toLowerCase())))
          return false;
      }

      // condition
      if (f.condition && f.condition.length > 0) {
        const cond = String(prod.condition || "").toLowerCase();
        if (!f.condition.some((c) => cond.includes(String(c).toLowerCase())))
          return false;
      }

      // store
      if (f.store && f.store.length > 0) {
        const store = String(prod.store || "").toLowerCase();
        if (!f.store.some((s) => store.includes(String(s).toLowerCase())))
          return false;
      }

      // search term
      if (searchTerm && searchTerm.trim() !== "") {
        const q = searchTerm.trim().toLowerCase();
        const hay = (
          (prod.title || "") +
          " " +
          (prod.brand || "") +
          " " +
          (prod.description || "") +
          " " +
          (prod.category || "")
        ).toLowerCase();
        if (!hay.includes(q)) return false;
      }

      return true;
    });

    // Sorting
    const sorted = [...list];
    if (sortBy === "price-asc") {
      sorted.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    } else if (sortBy === "discount") {
      sorted.sort((a, b) => Number(b.discountPercent || 0) - Number(a.discountPercent || 0));
    } else if (sortBy === "newest") {
      // assume there is 'createdAt' or fallback to id; newest first
      sorted.sort((a, b) => {
        const ta = new Date(a.createdAt || a.created_at || 0).getTime() || 0;
        const tb = new Date(b.createdAt || b.created_at || 0).getTime() || 0;
        return tb - ta;
      });
    }

    return sorted;
  }, [allProducts, filters, searchTerm, sortBy, loadingProducts]);

  return (
    <>
      <Navbar />

      <CategoryHeader
        resetFilters={handleResetFilters}
        onFilterChange={handleFilterChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="product-page d-flex">
        <FilterSidebar onFilterChange={handleFilterChange} resetSignal={filters} />

        <div className="flex-grow-1 px-3">
          {loadingProducts && <div>Loading products...</div>}
          {fetchError && <div className="text-danger">Error: {fetchError}</div>}
          {!loadingProducts && filteredProducts.length === 0 && (
            <div>No products match your filters.</div>
          )}

          <ProductGrid products={filteredProducts} />
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
