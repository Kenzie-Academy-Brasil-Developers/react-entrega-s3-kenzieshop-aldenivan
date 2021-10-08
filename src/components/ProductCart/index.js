import { ContainerCardCart, Line } from "./styles";

const ProductCart = ({ product }) => {
  return (
    <>
      <ContainerCardCart>
        <img src={product.image} />
        <p>{product.name}</p>
        <span> R$ {product.price.toFixed(2)}</span>
      </ContainerCardCart>
      <Line />
    </>
  );
};

export default ProductCart;
