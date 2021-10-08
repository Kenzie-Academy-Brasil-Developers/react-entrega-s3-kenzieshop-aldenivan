import "./App.css";
import { Switch, Route } from "react-router";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
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
            <Cart />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
