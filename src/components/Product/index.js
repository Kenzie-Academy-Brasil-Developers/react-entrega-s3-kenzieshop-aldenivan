import { ContainerCard } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

const Product = ({ product, teste = false }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContainerCard className="containerCard">
        <img src={product.image} />
        <hr />
        <p>{product.name}</p>
        <span> R$ {product.price.toFixed(2)}</span>
        {!teste ? (
          <button onClick={() => dispatch(addToCart(product))}>
            Adicionar ao carrinho
          </button>
        ) : null}
      </ContainerCard>
    </>
  );
};

export default Product;
