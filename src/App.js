import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import HouseRentItemDetails from "./Components/Home/HouseRentItemDetails/HouseRentItemDetails";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Sidebar from "./Components/Dashboard/Sidebar/Sidebar";
import MyRent from "./Components/Dashboard/User/MyRent/MyRent";
import AllBookingList from "./Components/Dashboard/Admin/AllBookingList/AllBookingList";
import AddRent from "./Components/Dashboard/User/AddRent/AddRent";
import Service from "./Components/Home/Service/Service";
import Login from "./Components/Login/Login/Login";

// export const UserContext = createContext();
export const houseRentItemContext = createContext();
export const userContext = createContext();

function App() {
  const [houseRentItem, setHouseRentItem] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            {/* <Route path="/service">
            <Service></Service>
          </Route> */}
            <Route path="/sidebar">
              <Sidebar></Sidebar>
            </Route>
            <Route path="/add-rent">
              <AddRent></AddRent>
            </Route>
            <Route path="/my-rent">
              <MyRent></MyRent>
            </Route>
            <Route path="/all-bookings">
              <AllBookingList></AllBookingList>
            </Route>
          </Switch>
        </Router>
      </houseRentItemContext.Provider>
    </userContext.Provider>
  );
}

export default App;
