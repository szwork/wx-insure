require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Link} from 'react-router';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Link to="/sell">测试</Link>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get starasfasted!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
