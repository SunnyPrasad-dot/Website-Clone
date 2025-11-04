import React, { useState, useEffect } from "react";
import i1 from "../../assets/images/logo.svg";
import "./FilterSidebar.css";

export default function FilterSidebar({ onFilterChange }) {
  const [localFilters, setLocalFilters] = useState({
    gender: [],
    category: [],
    designer: [],
    color: [],
    condition: [],
    discount: [],
    store: []
  });

  const handleCheckboxChange = (filterType, value, checked) => {
    setLocalFilters(prev => {
      const updated = { ...prev };
      if (checked) {
        updated[filterType] = [...updated[filterType], value];
      } else {
        updated[filterType] = updated[filterType].filter(item => item !== value);
      }
      return updated;
    });
  };

  useEffect(() => {
    onFilterChange(localFilters);
  }, [localFilters, onFilterChange]);

  return (
    <aside className="col-lg-2 col-md-3 col-12 border-end mb-4 mb-md-0 bg-body-tertiary">
      <div className="filter-section p-3 bg-body-tertiary">
        <img src={i1} alt="" width="150px" className="my-5" />

        <div className="accordion bg-body-tertiary" id="filterAccordion">
          {/* Gender */}
          <div className="accordion-item bg-body-tertiary">
            <button
              className="accordion-button bg-body-tertiary collapsed fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#gender"
            >
              GENDER
            </button>
            <div id="gender" className="accordion-collapse collapse">
              <div className="accordion-body">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('gender', 'Women', e.target.checked)}
                  /> Women
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('gender', 'Men', e.target.checked)}
                  /> Men
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('gender', 'Kids', e.target.checked)}
                  /> Kids
                </label>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="accordion-item">
            <button
              className="accordion-button bg-body-tertiary collapsed fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#category"
            >
              CATEGORY
            </button>
            <div id="category" className="accordion-collapse collapse">
              <div className="accordion-body bg-body-tertiary">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('category', 'Skincare', e.target.checked)}
                  /> Skincare
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('category', 'Hair', e.target.checked)}
                  /> Hair
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('category', 'Makeup', e.target.checked)}
                  /> Makeup
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('category', 'Fragrance', e.target.checked)}
                  /> Fragrance
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('category', 'Body Care', e.target.checked)}
                  /> Body Care
                </label>
              </div>
            </div>
          </div>

          {/* Designer */}
          <div className="accordion-item">
            <button
              className="accordion-button bg-body-tertiary collapsed fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#designer"
            >
              DESIGNER
            </button>
            <div id="designer" className="accordion-collapse collapse">
              <div className="accordion-body bg-body-tertiary">
                <input
                  type="search"
                  className="form-control mb-2"
                  placeholder="Search Designer..."
                />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('designer', 'Dior', e.target.checked)}
                  /> Dior
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('designer', 'Chanel', e.target.checked)}
                  /> Chanel
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('designer', 'T3', e.target.checked)}
                  /> T3
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('designer', 'Estée Lauder', e.target.checked)}
                  /> Estée Lauder
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('designer', 'Tom Ford', e.target.checked)}
                  /> Tom Ford
                </label>
              </div>
            </div>
          </div>

          {/* Color */}
          <div className="accordion-item">
            <button
              className="accordion-button bg-body-tertiary collapsed fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#color"
            >
              COLOR
            </button>
            <div id="color" className="accordion-collapse bg-body-tertiary collapse">
              <div className="accordion-body">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('color', 'Black', e.target.checked)}
                  /> Black
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('color', 'White', e.target.checked)}
                  /> White
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('color', 'Pink', e.target.checked)}
                  /> Pink
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('color', 'Gold', e.target.checked)}
                  /> Gold
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('color', 'Silver', e.target.checked)}
                  /> Silver
                </label>
              </div>
            </div>
          </div>

          {/* Condition */}
          <div className="accordion-item">
            <button
              className="accordion-button bg-body-tertiary collapsed fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#condition"
            >
              CONDITION
            </button>
            <div id="condition" className="accordion-collapse bg-body-tertiary collapse">
              <div className="accordion-body">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('condition', 'New', e.target.checked)}
                  /> New
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('condition', 'Good', e.target.checked)}
                  /> Good
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('condition', 'Excellent', e.target.checked)}
                  /> Excellent
                </label>
              </div>
            </div>
          </div>

          {/* Sale Discount */}
          <div className="accordion-item">
            <button
              className="accordion-button collapsed bg-body-tertiary fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#discount"
            >
              SALE DISCOUNT
            </button>
            <div id="discount" className="accordion-collapse bg-body-tertiary collapse">
              <div className="accordion-body">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('discount', '10', e.target.checked)}
                  /> 10% Off or more
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('discount', '20', e.target.checked)}
                  /> 20% Off or more
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('discount', '30', e.target.checked)}
                  /> 30% Off or more
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('discount', '50', e.target.checked)}
                  /> 50% Off or more
                </label>
              </div>
            </div>
          </div>

          {/* Store */}
          <div className="accordion-item">
            <button
              className="accordion-button collapsed bg-body-tertiary fw-bold"
              data-bs-toggle="collapse"
              data-bs-target="#store"
            >
              STORE
            </button>
            <div id="store" className="accordion-collapse bg-body-tertiary collapse">
              <div className="accordion-body">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('store', 'Sephora', e.target.checked)}
                  /> Sephora
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('store', 'Ulta Beauty', e.target.checked)}
                  /> Ulta Beauty
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('store', 'Selfridges', e.target.checked)}
                  /> Selfridges
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('store', 'Nordstrom', e.target.checked)}
                  /> Nordstrom
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange('store', 'Bloomingdale\'s', e.target.checked)}
                  /> Bloomingdale's
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
