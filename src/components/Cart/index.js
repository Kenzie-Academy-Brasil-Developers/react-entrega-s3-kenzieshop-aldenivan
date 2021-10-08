import { useSelector } from "react-redux";
import Product from "../Product";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
