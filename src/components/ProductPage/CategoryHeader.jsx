// import { Link, useLocation } from "react-router-dom";
// import "./CategoryHeader.css";
// import { useState } from "react";

// export function CategoryHeader() {
//   const location = useLocation();
//   const [filters, setFilters] = useState({
//     sale: "",
//     priceRange: "",
//     stock: "",
//   });

//   // --- Parse current route to build breadcrumb ---
//   const pathParts = location.pathname.split("/").filter(Boolean);
//   const base = "ModeSens";
//   const category = pathParts[0] ? pathParts[0] : "Home";
//   const subCategory = pathParts[1] || null;

//   // --- Page heading + description based on category ---
//   const headings = {
//     women: {
//       title: "Women's Fashion & Designer Products",
//       desc: "Shop authentic designer fashion for women. Discover new arrivals & purchase worry-free from 800+ stores.",
//     },
//     men: {
//       title: "Men's Fashion & Designer Products",
//       desc: "Explore the latest men's designer fashion from 800+ stores. Shop luxury styles and new arrivals.",
//     },
//     beauty: {
//       title: "Beauty & Skincare Products",
//       desc: "Shop premium beauty and skincare products from top designer brands across multiple stores.",
//     },
//     home: {
//       title: "Home & Lifestyle Products",
//       desc: "Discover luxury home decor, kitchenware, and lifestyle essentials from 800+ partners.",
//     },
//     kids: {
//       title: "Kids' Designer Fashion & Products",
//       desc: "Find premium kidswear and designer accessories from trusted stores worldwide.",
//     },
//   };

//   const current = headings[category?.toLowerCase()] || headings.women;

//   // --- Handle filter changes ---
//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   const resetFilters = () => {
//     setFilters({ sale: "", priceRange: "", stock: "" });
//   };

//   const anyFilterActive = Object.values(filters).some((f) => f);

//   return (
//     <div className="category-header-container">
//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <Link to="/">ModeSens</Link>
//         {category && (
//           <>
//             <span>/</span>
//             <Link to={`/${category}`}>{category}</Link>
//           </>
//         )}
//         {subCategory && (
//           <>
//             <span>/</span>
//             <span className="active">{subCategory}</span>
//           </>
//         )}
//       </div>

//       {/* Title + description */}
//       <div className="page-info">
//         <h1>{current.title}</h1>
//         <p>{current.desc}</p>
//       </div>

//       {/* Filter bar */}
//       <div className="filter-bar">
//         <div className="left">
//           <span className="filter-label">FILTER BY:</span>

//           <select
//             value={filters.sale}
//             onChange={(e) => handleFilterChange("sale", e.target.value)}
//           >
//             <option value="">Sale</option>
//             <option value="10">10% Off</option>
//             <option value="20">20% Off</option>
//             <option value="30">30% Off</option>
//           </select>

//           <select
//             value={filters.priceRange}
//             onChange={(e) => handleFilterChange("priceRange", e.target.value)}
//           >
//             <option value="">Price Range</option>
//             <option value="0-5000">₹0 - ₹5000</option>
//             <option value="5000-20000">₹5000 - ₹20000</option>
//             <option value="20000+">₹20000+</option>
//           </select>

//           <select
//             value={filters.stock}
//             onChange={(e) => handleFilterChange("stock", e.target.value)}
//           >
//             <option value="">In Stock</option>
//             <option value="in">In Stock</option>
//             <option value="out">Out of Stock</option>
//           </select>
//         </div>

//         <div className="right">
//           {anyFilterActive && (
//             <button className="reset-btn" onClick={resetFilters}>
//               Reset Filters
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Example applied filters text */}
//       <div className="active-filters">
//         Gender: {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
//         {subCategory && (
//           <>
//             <span>×</span> Condition: New
//           </>
//         )}
//       </div>

//       <div className="results-summary">
//         <span>
//           10,000+ results from <b>800+</b> partners | Page 1
//         </span>
//       </div>
//     </div>
//   );
// }
