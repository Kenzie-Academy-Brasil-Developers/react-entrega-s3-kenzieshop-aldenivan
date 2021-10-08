import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

const Product = ({ product, teste = false }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>{product.price}</p>
        {!teste ? (
          <button onClick={() => dispatch(addToCart(product))}>
            Adicionar ao carrinho
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Product;
