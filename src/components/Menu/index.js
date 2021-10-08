import { Link } from "react-router-dom";
import { MenuContainer } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <ul>
        <li>Kenzie Shop </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
