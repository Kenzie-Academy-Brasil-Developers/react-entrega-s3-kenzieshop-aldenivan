import { ContainerCard } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContainerCard>
        <img src={product.image} />
        <hr />
        <p>{product.name}</p>
        <span> R$ {product.price.toFixed(2)}</span>
        <button onClick={() => dispatch(addToCart(product))}>
          Adicionar ao carrinho
        </button>
      </ContainerCard>
    </>
  );
};

export default Product;
