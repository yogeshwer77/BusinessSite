import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contect from './components/Contect'
import Navbar from './components/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/Home" component={Home}></Route>
    <Route exact path="/Service" component={Service}></Route>
    <Route exact path="/About" component={About}></Route>
    <Route exact path="/Contect" component={Contect}></Route>
    <Redirect to="/"></Redirect>
    </Switch>
    <Footer></Footer>
    </div>
  );
}

export default App;
