import { useEffect, useState } from "react/cjs/react.development";
import { getProducts } from "./database";
import _ from "lodash";

function Product({ product }) {
  return (
    <div className="product">
      <img src={require("./image.png")} />
      <label className="name">{product.name}</label>
      <label className="price">Rs. {product.price}</label>
      <button
        onClick={() => {
          alert(`${product.name} added to cart successfully!`);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

function Products({ products }) {
  return (
    <div>
      <h1 className="products-title">Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <Product key={`${product.name}__${idx}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function MyApp() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(getProducts());

  const handleSearch = () => {
    setProducts(getProducts(search));
  };

  useEffect(handleSearch, [search]);

  return (
    <div className="app">
      <div className="search-bar">
        <input
          className="search-box"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <Products products={products} />
    </div>
  );
}
