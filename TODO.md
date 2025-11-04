# TODO: Convert HTML to React Components

## 1. FilterSidebar.jsx
- Convert aside section with accordion filters (gender, category, designer, color, condition, discount, store)
- Use Tailwind classes to match Bootstrap structure (accordion, form-check, etc.)
- Implement collapsible sections with React state
- Preserve filter logic integration with ProductPage.jsx

## 2. ProductCard.jsx
- Create card component with image, "QUICK VIEW" button, brand, title, price
- Use props for dynamic data (product object)
- Match HTML structure: img, button, card-body with p and h6
- Use Tailwind for responsive layout and styling

## 3. ProductGrid.jsx
- Map filteredProducts to ProductCard components
- Use responsive grid: col-lg-3 col-md-4 col-6 equivalent in Tailwind (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Preserve border and overflow classes
- Handle onQuickView and onToggleFavorite props

## 4. QuickViewModal.jsx
- Convert modal structure for quick view with image and details
- Use React state for modal visibility
- Match HTML modal classes and structure
- Display product details: image, brand, title, price, description

## 5. Toast.jsx
- Simple notification component for success/error messages
- Use Tailwind for positioning and styling
- Handle visibility and auto-hide functionality

## 6. ProductPage.jsx Adjustments
- Minor updates to match HTML structure (breadcrumb, heading, container layout)
- Ensure sidebar and grid layout matches original
- Preserve existing state management and filtering logic

## Testing & Verification
- Test component rendering and responsiveness
- Verify filter functionality works with sidebar
- Ensure modal opens on Quick View click
- Check toast notifications appear correctly
- Confirm UI matches original HTML structure
