'use strict';

import React from 'react';

require('styles/home/Home.scss');

import {Link} from 'react-router';
let HomeComponent = (props) => (
  <div className="home-component">
    <Link to="/sell">购买</Link>
  </div>
);

HomeComponent.displayName = 'HomeHomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
