import React from 'react';
import './App.scss';
import Questions from './Questions/Questions';
import Results from './Results/Results';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Questions} />
      <Route path="/results" component={Results} />
    </Switch>
  </Router>
)

export default App;
