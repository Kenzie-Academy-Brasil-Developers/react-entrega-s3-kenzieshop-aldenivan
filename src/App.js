import "./App.css";
import { Switch, Route } from "react-router";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="App-Main">
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
