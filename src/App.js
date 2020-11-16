import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import HouseRentItemDetails from "./Components/Home/HouseRentItemDetails/HouseRentItemDetails";

export const houseRentItemContext = createContext();
function App() {
  const [houseRentItem, setHouseRentItem] = useState({});
  return (
    <houseRentItemContext.Provider value={[houseRentItem, setHouseRentItem]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/houseRentItemDetails">
            <HouseRentItemDetails></HouseRentItemDetails>
          </Route>
        </Switch>
      </Router>
    </houseRentItemContext.Provider>
  );
}

export default App;
