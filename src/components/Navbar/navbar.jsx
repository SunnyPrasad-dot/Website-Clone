import React, { useState, useCallback, useMemo } from "react";
import "./navbar.css";

const menuData = [
  {
    name: "Women",
    link: "/women",
    dropdown: {
      mainTitle: "All Women",
      bannerImage: "https://placehold.co/200x250/C5C5C5/FFFFFF?text=New+Arrivals",
      columns: [
        { heading: "Clothing", items: ["Blouses", "T-Shirts", "Sweaters", "Jackets", "Coats", "Dresses", "Jeans", "Trousers", "Skirts", "Shorts"] },
        { heading: "Shoes", items: ["Sneakers", "Boots", "Sandals", "Heels", "Flats", "Pumps", "Loafers"] },
        { heading: "Bags & Accessories", items: ["Handbags", "Backpacks", "Jewelry", "Watches", "Sunglasses", "Scarves", "Wallets"] },
        { heading: "Beauty", items: ["Skincare", "Makeup", "Fragrance", "Haircare", "Wellness"] },
        { heading: "Sale & Pre-Owned", items: ["All Sale", "New Markdown", "All Pre-Owned", "Vintage Finds"] },
      ],
    },
  },
  {
    name: "Men",
    link: "/men",
    dropdown: {
      mainTitle: "All Men",
      bannerImage: "https://placehold.co/200x250/A3A3A3/FFFFFF?text=Summer+Edit",
      columns: [
        { heading: "Clothing", items: ["Shirts", "T-Shirts", "Polos", "Sweaters", "Hoodies", "Blazers", "Jeans", "Pants", "Shorts"] },
        { heading: "Shoes", items: ["Dress Shoes", "Sneakers", "Boots", "Loafers", "Sandals"] },
        { heading: "Bags & Accessories", items: ["Backpacks", "Belts", "Wallets", "Ties", "Watches", "Hats", "Sunglasses"] },
        { heading: "Grooming", items: ["Aftershave", "Cologne", "Skincare", "Haircare", "Shaving Cream"] },
        { heading: "Sale & Pre-Owned", items: ["All Sale", "New Markdown", "All Pre-Owned", "Designers"] },
      ],
    },
  },
  { name: "Kids", link: "/kids" },
  { name: "Accessories", link: "/accessories" },
  { name: "Shoes", link: "/shoes" },
  { name: "Sale", link: "/sale", isSale: true },
];

function DropdownMenu({ menuData }) {
  return (
    <div className="navbar-dropdown-content">
      <div className="navbar-dropdown-columns">
        <div className="navbar-dropdown-column">
          <a href="javascript:void(0)" className="main-category-title">
            {menuData.mainTitle}
          </a>
          <ul className="dropdown-link-list">
            <li><a href="javascript:void(0)">Designers</a></li>
            <li><a href="javascript:void(0)">Brands</a></li>
            <li><a href="javascript:void(0)">Stores</a></li>
          </ul>
        </div>

        {menuData.columns.map((col, i) => (
          <div key={i} className="navbar-dropdown-column">
            <span className="sub-category-heading">{col.heading}</span>
            <ul className="dropdown-link-list">
              {col.items.map((item, j) => (
                <li key={j}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="navbar-dropdown-banner">
          <img
            src={menuData.bannerImage}
            alt="Promotional Banner"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/200x250/C5C5C5/FFFFFF?text=Promotion";
            }}
          />
          <p>Monochrome Go Rectangle Acetate Sunglasses</p>
          <button className="join-now-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

function ActionArea() {
  return (
    <div className="navbar-action-area">
      <div className="search-bar-placeholder">
        <input type="text" placeholder="Search by text, product URL, or image" />
        <button aria-label="Search by image" className="camera-icon-btn">📷</button>
        <button aria-label="Search" className="search-icon-btn">🔍</button>
      </div>
      <div className="user-actions">
        
        <div class="country-selector-desktop">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="India Flag" />
                    <i class="fas fa-caret-down"></i>
                </div>
        <button className="join-now-btn">JOIN NOW</button>
      </div>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="navbar-brand">
      <a href="/">
        <span className="brand-modesens">MODESENS</span>
      </a>
    </div>
  );
}

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = useCallback((itemName) => {
    const item = menuData.find((i) => i.name === itemName);
    if (item?.dropdown) setActiveDropdown(itemName);
  }, []);

  const handleMouseLeave = useCallback(() => setActiveDropdown(null), []);

  const activeItem = useMemo(
    () => menuData.find((item) => item.name === activeDropdown),
    [activeDropdown]
  );

  return (
    <header>
      <div className="navbar-top-bar">
        <p>Upload a photo to find similar items across all stores. <a href="#">Search by image</a></p>
      </div>

      <nav className="navbar-main" onMouseLeave={handleMouseLeave}>
        <BrandLogo />

        <div className="navbar-links">
          {menuData.map((item) => (
            <div
              key={item.name}
              className={`navbar-link-item ${item.isSale ? "navbar-link-sale" : ""}`}
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>

        <ActionArea />

        {activeItem?.dropdown && <DropdownMenu menuData={activeItem.dropdown} />}
      </nav>
    </header>
  );
}
