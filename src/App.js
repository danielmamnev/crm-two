import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CreateCustomer from './components/CreateCustomer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={CustomerList} />
            <Route path="/edit" component={CreateCustomer} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
