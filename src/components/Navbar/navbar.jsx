import React, { useState, useCallback } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useSearch } from "../../context/SearchContext";
import "./navbar.css";
import "./profile.css";

const menuData = [
  {
    name: "Women",
    link: "/women",
    dropdown: {
      mainTitle: "All Women",
      bannerImage:
        "https://placehold.co/200x250/C5C5C5/FFFFFF?text=New+Arrivals",
      columns: [
        {
          heading: "Clothing",
          items: [
            "Blouses",
            "T-Shirts",
            "Sweaters",
            "Jackets",
            "Coats",
            "Dresses",
            "Jeans",
            "Trousers",
            "Skirts",
            "Shorts",
          ],
        },
        {
          heading: "Shoes",
          items: [
            "Sneakers",
            "Boots",
            "Sandals",
            "Heels",
            "Flats",
            "Pumps",
            "Loafers",
          ],
        },
        {
          heading: "Bags & Accessories",
          items: [
            "Handbags",
            "Backpacks",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Scarves",
            "Wallets",
          ],
        },
        {
          heading: "Beauty",
          items: ["Skincare", "Makeup", "Fragrance", "Haircare", "Wellness"],
        },
        {
          heading: "Sale & Pre-Owned",
          items: ["All Sale", "New Markdown", "All Pre-Owned", "Vintage Finds"],
        },
      ],
    },
  },
  {
    name: "Men",
    link: "/men",
    dropdown: {
      mainTitle: "All Men",
      bannerImage:
        "https://placehold.co/200x250/A3A3A3/FFFFFF?text=Summer+Edit",
      columns: [
        {
          heading: "Clothing",
          items: [
            "Shirts",
            "T-Shirts",
            "Polos",
            "Sweaters",
            "Hoodies",
            "Blazers",
            "Jeans",
            "Pants",
            "Shorts",
          ],
        },
        {
          heading: "Shoes",
          items: ["Dress Shoes", "Sneakers", "Boots", "Loafers", "Sandals"],
        },
        {
          heading: "Bags & Accessories",
          items: [
            "Backpacks",
            "Belts",
            "Wallets",
            "Ties",
            "Watches",
            "Hats",
            "Sunglasses",
          ],
        },
        {
          heading: "Grooming",
          items: [
            "Aftershave",
            "Cologne",
            "Skincare",
            "Haircare",
            "Shaving Cream",
          ],
        },
        {
          heading: "Sale & Pre-Owned",
          items: ["All Sale", "New Markdown", "All Pre-Owned", "Designers"],
        },
      ],
    },
  },
  { name: "Kids", link: "/kids" },
  { name: "Beauty", link: "/beauty" },
  { name: "Accessories", link: "/accessories" },
  { name: "Designers", link: "/designers" },
  { name: "Community", link: "/community" },
  { name: "Sale", link: "/sale", isSale: true },
];

// Dropdown for desktop
function DropdownMenu({ menuData }) {
  return (
    <div className="navbar-dropdown-content">
      <div className="navbar-dropdown-columns">
        <div className="navbar-dropdown-menu-sections">
          <div className="navbar-dropdown-column">
            <a href="javascript:void(0)" className="main-category-title">
              {menuData.mainTitle}
            </a>
            <ul className="dropdown-link-list">
              <li>
                <a href="javascript:void(0)">Designers</a>
              </li>
              <li>
                <a href="javascript:void(0)">Brands</a>
              </li>
              <li>
                <a href="javascript:void(0)">Stores</a>
              </li>
            </ul>
          </div>

          {menuData.columns.map((col, i) => (
            <div key={i} className="navbar-dropdown-column">
              <span className="sub-category-heading">{col.heading}</span>
              <ul className="dropdown-link-list">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="navbar-dropdown-banner">
          <img
            src={menuData.bannerImage}
            alt="Promotional Banner"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/200x250/C5C5C5/FFFFFF?text=Promotion";
            }}
          />
          <p>Monochrome Go Rectangle Acetate Sunglasses</p>
          <button className="join-now-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

// Brand dropdown under search bar
function BrandDropdown({ visible, brands, onSelectBrand }) {
  if (!visible) return null;
  return (
    <div className="brand-dropdown-container">
      <div className="brand-dropdown-content">
        <h4 className="brand-dropdown-title">BRANDS</h4>
        <div className="brand-dropdown-grid">
          {brands.map((brand) => (
            <button
              key={brand}
              type="button"
              className="brand-pill"
              onMouseDown={(e) => {
                e.preventDefault();
                onSelectBrand(brand);
              }}
            >
              {brand.toUpperCase()}
            </button>
          ))}
          {brands.length === 0 && <p>No brands available</p>}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Search context
  const {
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    searchOpen,
    setSearchOpen,
    brands,
  } = useSearch();

  // --- Dropdown handlers ---
  const handleMouseEnter = useCallback((itemName) => {
    const item = menuData.find((i) => i.name === itemName);
    if (item?.dropdown) setActiveDropdown(itemName);
  }, []);

  const handleMouseLeave = useCallback(() => setActiveDropdown(null), []);

  // --- Category click navigation fix ---
  const handleCategoryClick = (link) => {
    setActiveDropdown(null);
    setSearchTerm("");
    setSelectedBrand("");
    setSearchOpen(false);
    if (location.pathname !== link) navigate(link);
  };

  // --- Brand and search handling ---
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSearchTerm("");
    setSearchOpen(false);
    const match = location.pathname.match(/^\/(women|men|kids|beauty|accessories)/i);
    navigate(match ? location.pathname : "/women");
  };

  const onInputChange = (e) => {
    setSelectedBrand("");
    setSearchTerm(e.target.value);
    if (!searchOpen) setSearchOpen(true);
  };

  const handleFocus = () => setSearchOpen(true);
  const handleBlur = () => setTimeout(() => setSearchOpen(false), 150);

  const handleLogout = () => {
    logout();
    setShowProfileDropdown(false);
  };

  return (
    <header>
      <div className="navbar-top-bar">
        <p>
          Upload a photo to find similar items across all stores.{" "}
          <a href="#">Search by image</a>
        </p>
      </div>

      <nav className="navbar-main" onMouseLeave={handleMouseLeave}>
        <button
          className="hamburger-menu"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
        >
          ☰
        </button>

        <div className="navbar-brand" onClick={() => navigate("/")}>
          <span className="brand-modesens">MODESENS</span>
        </div>

        <div className="navbar-links">
          {menuData.map((item) => (
            <div
              key={item.name}
              className={`navbar-link-item ${
                item.isSale ? "navbar-link-sale" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onClick={() => handleCategoryClick(item.link)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="navbar-action-area">
          <div
            className="search-bar-placeholder"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <input
              type="text"
              placeholder="Search products or brands"
              value={searchTerm}
              onChange={onInputChange}
            />
            <button className="search-icon-btn">🔍</button>
            <BrandDropdown
              visible={searchOpen}
              brands={brands}
              onSelectBrand={handleBrandSelect}
            />
          </div>

          <div className="user-actions">
            <div className="country-selector-desktop">
              <span>IN</span>
            </div>

            {isLoggedIn ? (
              <div className="profile-container">
                <div
                  className="profile-initials"
                  onClick={() => setShowProfileDropdown((p) => !p)}
                >
                  JD
                </div>
                {showProfileDropdown && (
                  <div className="profile-dropdown">
                    <div className="profile-header">
                      <span className="profile-name">Jane Doe</span>
                      <span className="profile-email">test@modesens.com</span>
                    </div>
                    <div className="profile-links">
                      <button
                        onClick={() => navigate("/profile")}
                        className="profile-option"
                      >
                        My Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="profile-option logout"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="join-now-btn"
                onClick={() => navigate("/login")}
              >
                JOIN NOW
              </button>
            )}
          </div>
        </div>

        {activeDropdown && (
          <DropdownMenu
            menuData={
              menuData.find((item) => item.name === activeDropdown)?.dropdown
            }
          />
        )}
      </nav>
    </header>
  );
}
