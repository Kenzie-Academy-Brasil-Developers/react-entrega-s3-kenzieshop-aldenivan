import { ContainerList } from "./styles";
import { useSelector } from "react-redux";
import Product from "../../components/Product";

const ProductList = () => {
  const { products } = useSelector((store) => store);

  return (
    <>
      <ContainerList>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ContainerList>
    </>
  );
};

export default ProductList;
