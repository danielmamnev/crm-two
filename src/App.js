import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={CustomerList} />
          <Route path="/edit" component={EditCustomer} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
