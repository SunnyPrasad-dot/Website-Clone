import React from "react";
import "./QuickViewModal.css";

export default function QuickViewModal({ show, onClose, product }) {
  if (!product) return null;

  return (
    <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header border-0">
            <h5 className="modal-title">Product Quick View</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body d-flex flex-column flex-md-row gap-3">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded w-100 w-md-50"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available")
              }
            />
            <div>
              <h5 className="fw-bold mb-2">{product.title}</h5>
              <p>Brand: {product.brand}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <p>{product.description || "No additional description available."}</p>
              
              <button className="btn btn-dark w-100 rounded-pill fw-semibold py-2">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* background overlay */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
}
