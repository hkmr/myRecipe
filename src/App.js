import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Cart from './pages/cart';
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
