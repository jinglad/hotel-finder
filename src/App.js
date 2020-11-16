import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import HouseRentItemDetails from "./Components/Home/HouseRentItemDetails/HouseRentItemDetails";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

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
          <PrivateRoute path="/houseRentItemDetails">
            <HouseRentItemDetails></HouseRentItemDetails>
          </PrivateRoute>
        </Switch>
      </Router>
    </houseRentItemContext.Provider>
  );
}

export default App;
