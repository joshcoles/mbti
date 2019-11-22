import React from 'react';
import './App.scss';
import Questions from './components/Questions/Questions';
import Results from './components/Results/Results';
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
