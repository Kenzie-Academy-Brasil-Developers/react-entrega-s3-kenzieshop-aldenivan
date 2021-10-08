import { Container, ContainerCart, TotalCart } from "./styles";
import { useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const quantity = cart.length;
  const total = cart.reduce((acc, { price }) => acc + price, 0).toFixed(2);

  return (
    <Container>
      <ContainerCart>
        {cart.map((product) => (
          <li key={product.id}>
            <ProductCart product={product} />
          </li>
        ))}
      </ContainerCart>
      <TotalCart>
        <h3>Resumo do pedido</h3>
        <span>
          <p>{quantity} produto(s)</p>
          <p>R$ {total}</p>
        </span>
        <button>Finalizar pedido</button>
      </TotalCart>
    </Container>
  );
};

export default Cart;
