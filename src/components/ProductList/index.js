import { useSelector } from "react-redux";
import Product from "../Product";

const ProductList = () => {
  const { products } = useSelector((store) => store);

  return (
    <>
      <div>
        {products.map((product) => (
          <li>
            <Product product={product} />
          </li>
        ))}
      </div>
    </>
  );
};

export default ProductList;
