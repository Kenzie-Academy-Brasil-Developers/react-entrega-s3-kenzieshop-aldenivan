import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>Logo qualquer</li>
        <li>
          {" "}
          <Link to="/cart">Carrinho</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
