
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
// import 'react-router-proxy-loader';

export default function configureRouter(history){
  return (
    <Router history={history}>
      <Route path="/" component={require('./../containers/App')}>
        <IndexRoute component={require('./../components/home/HomeComponent')}/>
        <Route path="/sell" component={require('./../components/sell/InsureComponent')}/>
        <Route path="/me" component={require('./../components/sell/InsureComponent')}/>
      </Route>
    </Router>
  )
}