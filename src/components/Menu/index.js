import { Link } from "react-router-dom";
import { MenuContainer } from "./styles";
import { FiShoppingCart } from "react-icons/fi";

const Menu = () => {
  return (
    <MenuContainer>
      <ul>
        <li>Kenzie Shop </li>
        <li>
          <Link to="/cart">Cart {FiShoppingCart}</Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
