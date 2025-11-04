import React, { useState, useEffect } from "react";
import i1 from "../../assets/images/logo.svg";
import "./FilterSidebar.css";

export default function FilterSidebar({ onFilterChange, resetSignal = {} }) {
  const [localFilters, setLocalFilters] = useState({
    gender: [],
    subCategory: [],
    designer: [],
    color: [],
    condition: [],
    discount: [],
    store: [],
  });

  // handle checkbox toggle
  const handleCheckboxChange = (filterType, value, checked) => {
    setLocalFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        // Add the value
        updated[filterType] = [...prev[filterType], value];
      } else {
        // Remove the value
        updated[filterType] = prev[filterType].filter((item) => item !== value);
      }
      return updated;
    });
  };

  // send filter changes to parent (ProductPage)
  useEffect(() => {
    if (onFilterChange) onFilterChange(localFilters);
  }, [localFilters, onFilterChange]);

  // handle reset signal safely from parent
  useEffect(() => {
    // Check if the array fields in resetSignal are empty, confirming a full reset
    const arrayFields = ['gender', 'subCategory', 'designer', 'color', 'condition', 'discount', 'store'];
    const isArrayReset = arrayFields.every(key =>
      Array.isArray(resetSignal[key]) && resetSignal[key].length === 0
    );

    // Also check if the string fields are empty
    const isStringReset = !resetSignal.sale && !resetSignal.category;

    // Trigger local reset if the parent filters are fully reset
    if (isArrayReset && isStringReset) {
      setLocalFilters({
        gender: [],
        subCategory: [],
        designer: [],
        color: [],
        condition: [],
        discount: [],
        store: [],
      });
    }
  }, [resetSignal]);

  return (
    <aside className="col-lg-2 col-md-3 col-12 border-end mb-4 mb-md-0 bg-body-tertiary">
      <div className="filter-section p-3 bg-body-tertiary">
        <img src={i1} alt="logo" width="150px" className="my-5" />

        <div className="accordion bg-body-tertiary" id="filterAccordion">
          {/* Gender */}
          <AccordionItem title="GENDER" id="gender">
            {["Women", "Men", "Kids"].map((g) => (
              <label key={g}>
                <input
                  type="checkbox"
                  checked={localFilters.gender.includes(g)} // SYNCHRONIZED
                  onChange={(e) =>
                    handleCheckboxChange("gender", g, e.target.checked)
                  }
                />{" "}
                {g}
                <br />
              </label>
            ))}
          </AccordionItem>

          {/* Category */}
          <AccordionItem title="CATEGORY" id="category">
            {["Dresses", "Tops", "Shoes", "Bags", "Accessories", "Jewelry"].map((c) => (
              <label key={c}>
                <input
                  type="checkbox"
                  checked={localFilters.subCategory.includes(c)} // SYNCHRONIZED
                  onChange={(e) =>
                    handleCheckboxChange("subCategory", c, e.target.checked)
                  }
                />{" "}
                {c}
                <br />
              </label>
            ))}
          </AccordionItem>

          {/* Designer */}
          <AccordionItem title="DESIGNER" id="designer">
            <input
              type="search"
              className="form-control mb-2"
              placeholder="Search Designer..."
            />
            {["Dior", "Chanel", "T3", "Estée Lauder", "Tom Ford"].map((d) => (
              <label key={d}>
                <input
                  type="checkbox"
                  checked={localFilters.designer.includes(d)} // SYNCHRONIZED
                  onChange={(e) =>
                    handleCheckboxChange("designer", d, e.target.checked)
                  }
                />{" "}
                {d}
                <br />
              </label>
            ))}
          </AccordionItem>

          {/* Color */}
          <AccordionItem title="COLOR" id="color">
            {["Black", "White", "Pink", "Gold", "Silver"].map((c) => (
              <label key={c}>
                <input
                  type="checkbox"
                  checked={localFilters.color.includes(c)} // SYNCHRONIZED
                  onChange={(e) =>
                    handleCheckboxChange("color", c, e.target.checked)
                  }
                />{" "}
                {c}
                <br />
              </label>
            ))}
          </AccordionItem>

          {/* Condition */}
          <AccordionItem title="CONDITION" id="condition">
            {["New", "Good", "Excellent"].map((cond) => (
              <label key={cond}>
                <input
                  type="checkbox"
                  checked={localFilters.condition.includes(cond)} // SYNCHRONIZED
                  onChange={(e) =>
                    handleCheckboxChange("condition", cond, e.target.checked)
                  }
                />{" "}
                {cond}
                <br />
              </label>
            ))}
          </AccordionItem>

          {/* Sale Discount */}
          <AccordionItem title="SALE DISCOUNT" id="discount">
            {[10, 20, 30, 50].map((off) => (
              <label key={off}>
                <input
                  type="checkbox"
                  checked={localFilters.discount.includes(off.toString())} // SYNCHRONIZED
                  onChange={(e) =>
                    handleCheckboxChange("discount", off.toString(), e.target.checked)
                  }
                />{" "}
                {off}% Off or more
                <br />
              </label>
            ))}
          </AccordionItem>

          {/* Store */}
          <AccordionItem title="STORE" id="store">
            {["Sephora", "Ulta Beauty", "Selfridges", "Nordstrom", "Bloomingdale's"].map(
              (s) => (
                <label key={s}>
                  <input
                    type="checkbox"
                    checked={localFilters.store.includes(s)} // SYNCHRONIZED
                    onChange={(e) =>
                      handleCheckboxChange("store", s, e.target.checked)
                    }
                  />{" "}
                  {s}
                  <br />
                </label>
              )
            )}
          </AccordionItem>
        </div>
      </div>
    </aside>
  );
}

/* Helper subcomponent to keep code DRY */
function AccordionItem({ title, id, children }) {
  return (
    <div className="accordion-item bg-body-tertiary">
      <button
        className="accordion-button bg-body-tertiary collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
      >
        {title}
      </button>
      <div id={id} className="accordion-collapse collapse">
        <div className="accordion-body bg-body-tertiary">{children}</div>
      </div>
    </div>
  );
}