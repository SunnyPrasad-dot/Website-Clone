# TODO: Implement Category Filtering Based on Navbar Clicks

## Tasks
- [ ] Add missing routes in App.jsx for /kids and /accessories
- [ ] Modify ProductPage.jsx to use useParams for category and set initial filters
- [ ] Update CategoryHeader.jsx to display dynamic title and breadcrumb based on category
- [ ] Test filtering by clicking navbar links to ensure only relevant products show

## Notes
- Use useParams in ProductPage to get category from URL
- Map URL category to filter gender: e.g., 'women' -> ['Women']
- Pass category prop to CategoryHeader for dynamic display
