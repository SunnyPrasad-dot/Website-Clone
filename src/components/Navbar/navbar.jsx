import React, { useState, useCallback, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../AuthContext"; // <-- Added
import "./navbar.css";
import "./profile.css"; // <-- Added

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
  { name: "Beauty", link: "/beauty" },
  { name: "Accessories", link: "/accessories" },
  { name: "Designers", link: "/designers" },
  { name: "Community", link: "/community" },
  { name: "Sale", link: "/sale", isSale: true },
];

// ---------------------- DROPDOWN MENU ----------------------
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
        </div>

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

// ---------------------- ACTION AREA (Profile Logic Added) ----------------------

function ActionArea({ toggleSearch }) {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Temporary demo user info — replace with your user data logic if you add backend later
  const user = {
    name: "Jane Doe",
    email: "test@modesens.com",
  };

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "U";

  const handleProfileClick = () => setShowDropdown((prev) => !prev);
  const handleJoinNow = () => navigate("/login");
  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <div className="navbar-action-area">
      <div className="search-bar-placeholder">
        <input type="text" placeholder="Search by text, product URL, or image" />
        <button aria-label="Search" className="search-icon-btn">🔍</button>
      </div>

      <div className="user-actions">
        <div className="country-selector-desktop">
          <span>IN</span>
        </div>

        {isLoggedIn ? (
          <div className="profile-container">
            <div className="profile-initials" onClick={handleProfileClick}>
              {initials}
            </div>
            {showDropdown && (
              <div className="profile-dropdown">
                <div className="profile-header">
                  <span className="profile-name">{user.name}</span>
                  <span className="profile-email">{user.email}</span>
                </div>
                <div className="profile-links">
                  <button onClick={() => navigate("/profile")} className="profile-option">
                    <span className="profile-icon">👤</span> My Profile
                  </button>
                  <button onClick={handleLogout} className="profile-option logout">
                    <span className="profile-icon">↩</span> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="join-now-btn" onClick={handleJoinNow}>JOIN NOW</button>
        )}
      </div>
    </div>
  );
}


// ---------------------- BRAND LOGO ----------------------
function BrandLogo() {
  return (
    <div className="navbar-brand">
      <Link to="/">
        <span className="brand-modesens">MODESENS</span>
      </Link>
    </div>
  );
}

// ---------------------- MOBILE MENU ----------------------
function MobileMenu({ isOpen, toggleMenu, menuData, toggleCategory, expandedCategories }) {
  const renderSubDropdown = (dropdownData) => (
    <div className="mobile-dropdown-content">
      <div className="mobile-dropdown-header">
        <button onClick={() => toggleCategory(dropdownData.name)} className="back-button">
          <span className="arrow-left">&#8249;</span> {dropdownData.name}
        </button>
      </div>
      <ul className="mobile-dropdown-list">
        <li><a href={dropdownData.link}>{dropdownData.mainTitle}</a></li>
        <li><a href="javascript:void(0)">Designers</a></li>
        <li><a href="javascript:void(0)">Brands</a></li>
        <li><a href="javascript:void(0)">Stores</a></li>
        {dropdownData.columns.map((col, i) => (
          <li key={i}>
            <span className="mobile-sub-category-heading">{col.heading}</span>
            <ul className="mobile-sub-dropdown-list">
              {col.items.map((item, j) => (
                <li key={j}><a href={`#${item.toLowerCase().replace(/\s/g, "-")}`}>{item}</a></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {dropdownData.bannerImage && (
        <div className="mobile-dropdown-banner">
          <img src={dropdownData.bannerImage} alt="Promotion" />
          <p>Monochrome Go Rectangle Acetate Sunglasses</p>
          <button className="join-now-btn">Shop Now</button>
        </div>
      )}
    </div>
  );

  return (
    <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-sidebar">
        <div className="mobile-menu-header">
          <BrandLogo />
          <button onClick={toggleMenu} className="close-btn">X</button>
        </div>
        <ul className="mobile-main-links">
          {menuData.map((item) => (
            <li key={item.name} className={`mobile-link-item ${expandedCategories[item.name] ? "expanded" : ""}`}>
              {item.dropdown ? (
                <>
                  <a href="javascript:void(0)" onClick={() => toggleCategory(item.name)} className="mobile-category-toggle">
                    {item.name}
                    <span className="toggle-icon">{expandedCategories[item.name] ? "-" : "+"}</span>
                  </a>
                  {expandedCategories[item.name] && renderSubDropdown(item.dropdown)}
                </>
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </li>
          ))}
          <li className="mobile-link-item"><a href="/signup">SIGN UP NOW</a></li>
          <li className="mobile-link-item app-download">
            <img src="https://modesens.com/static/img/modesens-app-badge.svg" alt="Modesens App" />
            <p>Get real-time alerts for price drops, new arrivals, and exclusive deals.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ---------------------- SEARCH DROPDOWN ----------------------
function MobileSearchDropdown({ isSearchVisible, toggleSearch }) {
  const handleSearchClick = (e) => e.stopPropagation();

  return (
    <div
      className={`mobile-search-dropdown ${isSearchVisible ? 'open' : ''}`}
      onClick={toggleSearch}
    >
      <div className="mobile-search-content" onClick={handleSearchClick}>
        <button className="search-cancel-btn" onClick={toggleSearch}>✕</button>
        <div className="search-bar-placeholder">
          <input type="text" placeholder="Search by text, product URL, or image" />
          <button aria-label="Search by image" className="camera-icon-btn">📷</button>
          <button aria-label="Search" className="search-icon-btn">🔍</button>
        </div>
      </div>
    </div>
  );
}

// ---------------------- MAIN NAVBAR ----------------------
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleMouseEnter = useCallback((itemName) => {
    const item = menuData.find((i) => i.name === itemName);
    if (item?.dropdown) setActiveDropdown(itemName);
  }, []);

  const handleMouseLeave = useCallback(() => setActiveDropdown(null), []);
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setExpandedCategories({});
  }, []);
  const toggleSearch = useCallback(() => setIsSearchVisible((prev) => !prev), []);
  const toggleCategory = useCallback((categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  }, []);

  const activeItem = useMemo(
    () => menuData.find((item) => item.name === activeDropdown),
    [activeDropdown]
  );

  return (
    <header className={isSearchVisible ? 'search-active' : ''}>
      <div className="navbar-top-bar">
        <p>Upload a photo to find similar items across all stores. <a href="#">Search by image</a></p>
      </div>

      <nav className="navbar-main" onMouseLeave={handleMouseLeave}>
        <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Open menu">
          ☰
        </button>
        <BrandLogo />

        <div className="navbar-links">
          {menuData.map((item) => (
            <div
              key={item.name}
              className={`navbar-link-item ${item.isSale ? "navbar-link-sale" : ""}`}
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              <Link to={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>

        <ActionArea toggleSearch={toggleSearch} />
        {activeItem?.dropdown && <DropdownMenu menuData={activeItem.dropdown} />}
      </nav>

      <MobileSearchDropdown isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        menuData={menuData}
        toggleCategory={toggleCategory}
        expandedCategories={expandedCategories}
      />
    </header>
  );
}
