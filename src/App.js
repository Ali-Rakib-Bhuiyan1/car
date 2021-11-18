import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";

import BookProducts from './components/Home/BookProducts/BookProducts';
import DashboardPage from './components/Dashboard/DashboardPage/DashboardPage';
import ExploreProducts from './components/ExploreProducts/ExploreProducts';


function App() {
  return (
 
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/exploreProducts'>
            <ExploreProducts></ExploreProducts>
          </Route>
          <PrivateRoute path="/bookProducts/:productId">
            <BookProducts></BookProducts>
          </PrivateRoute>
          <PrivateRoute path='/dashboardPage'>
            <DashboardPage></DashboardPage>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    
  );
}

export default App;

