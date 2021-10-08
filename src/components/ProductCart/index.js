import { ContainerCardCart } from "./styles";

const ProductCart = ({ product }) => {
  return (
    <>
      <ContainerCardCart>
        <img src={product.image} />
        <hr />
        <p>{product.name}</p>
        <span> R$ {product.price.toFixed(2)}</span>
      </ContainerCardCart>
    </>
  );
};

export default ProductCart;
