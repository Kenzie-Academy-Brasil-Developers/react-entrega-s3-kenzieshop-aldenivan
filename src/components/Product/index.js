const Product = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </>
  );
};

export default Product;
