import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    sale: "",
    priceRange: "",
    stock: "",
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ sale: "", priceRange: "", stock: "" });
  };

  const anyFilterActive = Object.values(filters).some((v) => v);

  return (
    <FilterContext.Provider
      value={{ filters, updateFilter, resetFilters, anyFilterActive }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
