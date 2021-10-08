import { useSelector } from "react-redux";
import Product from "../Product";

const ProductList = () => {
  const { products } = useSelector((store) => store);

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
