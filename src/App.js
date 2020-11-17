import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import HouseRentItemDetails from "./Components/Home/HouseRentItemDetails/HouseRentItemDetails";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const houseRentItemContext = createContext();
function App() {
  const [houseRentItem, setHouseRentItem] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <houseRentItemContext.Provider value={[houseRentItem, setHouseRentItem]}>
        <p>Name: {loggedInUser.name}</p>
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
    </UserContext.Provider>
  );
}

export default App;
