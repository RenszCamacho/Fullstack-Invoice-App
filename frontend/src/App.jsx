import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import configureStore from './redux/store';
import Details from './components/Details';
import NewForm from './components/Forms/NewForm';
import EditForm from './components/Forms/EditForm';
import LogIn from './components/LogIn';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route path="/details/:invoiceId" component={Details} />
          <Route path="/" exact component={LogIn} />
          <Route path="/newform" component={NewForm} />
          <Route path="/editform" component={EditForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
