import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/index';
export function PageRouter() {
  return (
    <Router>
      <Route path exact component={Home}/>
    </Router>
  )
}