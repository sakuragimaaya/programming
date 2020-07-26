import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC'

const sampleArray = [
  { id: 1, name: 'aaa', date: 19921123 },
  { id: 2, name: 'bbb', date: 19921124 },
  { id: 3, name: 'ccc', date: 19921125 },
  { id: 4, name: 'ddd', date: 19921126 },
  { id: 5, name: 'eee', date: 19921127 }
];

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path='/' component={ComponentA} />
        <Route exact path='/componentb' component={ComponentB} />
        <Route exact path='/componentc' component={ComponentC} />
      </Switch>
    </Router>
  );
}

export default App;