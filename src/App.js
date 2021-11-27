import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Destinations from "./Pages/Destinations/Destinations";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home/Home";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Tours from "./Pages/Tours/Tours";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TourDetails from "./Pages/TourDetails/TourDetails";
import DestinationDetails from "./Pages/DestinationDetails/DestinationDetails";
import AddDestination from "./Pages/AddDestination/AddDestination";
import LogIn from "./Pages/LogIn/LogIn";
import AuthProvider from "./Components/Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            {/* Home Page */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>

            {/* Destinations Page */}
            <Route exact path="/destinations">
              <Destinations />
            </Route>

            {/* tours Page */}
            <Route exact path="/tours">
              <Tours />
            </Route>

            {/* About us Page */}
            <Route exact path="/about">
              <About />
            </Route>

            {/* Our Team */}
            <Route exact path="/ourTeam">
              <OurTeam />
            </Route>

            {/* Contact Us */}
            <Route exact path="/contact">
              <Contact />
            </Route>

            {/* Destination */}
            <PrivateRoute path="/destinations/:destinationId">
              <DestinationDetails />
            </PrivateRoute>

            {/*Add Destination */}
            <PrivateRoute exact path="/AddDestination">
              <AddDestination />
            </PrivateRoute>

            {/* Tour */}
            <PrivateRoute path="/tours/:tourId">
              <TourDetails />
            </PrivateRoute>

            {/* Log In form */}
            <Route exact path="/logIn">
              <LogIn />
            </Route>

            {/* Manage All Orders */}
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrders />
            </PrivateRoute>

            {/* My Orders */}
            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>

            {/* Error Page */}
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
