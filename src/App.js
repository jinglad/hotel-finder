import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import HouseRentItemDetails from "./Components/Home/HouseRentItemDetails/HouseRentItemDetails";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Sidebar from "./Components/Dashboard/Sidebar/Sidebar";
import MyRent from "./Components/Dashboard/User/MyRent/MyRent";
import AllBookingList from "./Components/Dashboard/Admin/AllBookingList/AllBookingList";
import AddRent from "./Components/Dashboard/User/AddRent/AddRent";
import MakeAdmin from "./Components/Dashboard/Admin/MakeAdmin";

export const houseRentItemContext = createContext();
export const userContext = createContext();
export const bookingsContext = createContext();

function App() {
  const [houseRentItem, setHouseRentItem] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  const [orders, setOrders] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <houseRentItemContext.Provider value={[houseRentItem, setHouseRentItem]}>
        <bookingsContext.Provider value={[orders, setOrders]}>
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
              <PrivateRoute path="/sidebar">
                <Sidebar></Sidebar>
              </PrivateRoute>
              <PrivateRoute path="/add-rent">
                <AddRent></AddRent>
              </PrivateRoute>
              <PrivateRoute path="/my-rent">
                <MyRent></MyRent>
              </PrivateRoute>
              <PrivateRoute path="/all-bookings">
                <AllBookingList></AllBookingList>
              </PrivateRoute>
              <PrivateRoute path="/make-admin">
                <MakeAdmin />
              </PrivateRoute>
            </Switch>
          </Router>
        </bookingsContext.Provider>
      </houseRentItemContext.Provider>
    </userContext.Provider>
  );
}

export default App;
