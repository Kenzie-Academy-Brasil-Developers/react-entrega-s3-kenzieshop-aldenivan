import { ContainerCard } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContainerCard>
        <img src={product.image} />
        <hr />
        <p>{product.name}</p>
        <span> R$ {product.price.toFixed(2)}</span>
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar ao carrinho
        </button>
      </ContainerCard>
    </>
  );
};

export default Product;
