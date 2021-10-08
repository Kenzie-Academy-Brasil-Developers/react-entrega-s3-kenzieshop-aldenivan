import { ContainerCart } from "./styles";
import { useSelector } from "react-redux";
import ProductCart from "../ProductCart";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <ContainerCart>
        {cart.map((product) => (
          <li key={product.id}>
            <ProductCart product={product} />
          </li>
        ))}
      </ContainerCart>
    </>
  );
};

export default Cart;
