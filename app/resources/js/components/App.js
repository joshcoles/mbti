import React, { useState } from 'react';
import './App.scss';
import Questions from './Questions/Questions';
import Results from './Results/Results';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  withRouter
} from 'react-router-dom';

const App = () => {

  const [results, setResults] = useState('1234');
  const [id, setId] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Questions setId={setId} />} />
        <Route path="/results" component={() => <Results id={id} />} />
      </Switch>
    </Router>
  )
}


export default App;
