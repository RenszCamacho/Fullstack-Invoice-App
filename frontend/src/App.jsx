import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
