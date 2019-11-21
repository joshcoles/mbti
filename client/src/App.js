import React from 'react';
import './App.css';
import Questions from './components/Questions/Questions';
import Results from './components/Results';
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
