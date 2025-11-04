import { ProductCard } from "../ProductPage/ProductCard";
import "./ProductGrid.css"

export default function ProductGrid({ products }) {
  return (
    <div className="container-fluid px-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col text-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
