'use strict';

import React from 'react';

require('styles/home/Home.scss');

import {Link} from 'react-router';
let HomeComponent = () => (
  <div className="home-component">
    <Link to="/list">购买列表1</Link>
    <Link to="/me">个人中心</Link>
  </div>
);

HomeComponent.displayName = 'HomeHomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
