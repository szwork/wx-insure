
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
// import 'react-router-proxy-loader';

export default function configureRouter(history){
  return (
    <Router history={history}>
      <Route path="/" component={require('./../containers/App')}>
        <IndexRoute component={require('./../components/home/HomeComponent')}/>
        <Route path="list" component={require('./../components/sell/ListComponent')}/>
        <Route path="insure" component={require('./../components/sell/InsureComponent')}></Route>
        <Route path="intro" component={require('./../components/sell/IntroductionComponent')}/>
        <Route path="form/:people" component={require('./../components/sell/FormComponent')}/>
        <Route path="entity" component={require('./../components/sell/EntityComponent')}/>
        <Route path="me" component={require('./../components/sell/InsureComponent')}/>
      </Route>
    </Router>
  )
}