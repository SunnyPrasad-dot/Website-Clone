import { useState } from "react";
import "./ProductCard.css";
import QuickViewModal from "./QuickViewModal";


export function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available";
  };

  return (
    <>
      <div className="product-card position-relative text-center">
        <div className="badge-container">
          {product.badge && <span className="badge">{product.badge}</span>}
        </div>

        <div className="image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            onError={handleImageError}
            className="product-image"
          />
        </div>

        <button
          className="quick-view-btn btn btn-outline-dark"
          onClick={() => setShowModal(true)}
        >
          QUICK VIEW
        </button>

        <p className="fw-bold text-uppercase mb-1">{product.brand}</p>
        <p className="text-muted mb-1">{product.title}</p>
        <p className="text-dark mb-1">
          <span style={{ color: "red" }}>{product.discountedPrice}</span>
          {product.discountPercent && (
            <span className="text-danger ms-1">
              ({product.discountPercent}% OFF)
            </span>
          )}
          {product.originalPrice && <> to ₹{product.originalPrice}</>}
        </p>
        <a href="#" className="compare-link">
          Compare {product.storeCount} Stores
        </a>
      </div>

      {showModal && (
        <QuickViewModal
          show={showModal}
          onClose={() => setShowModal(false)}
          product={product}
        />
      )}
    </>
  );
}
