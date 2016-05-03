'use strict';

import React from 'react';

require('styles/sell/Insure.scss');

class InsureComponent extends React.Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="insure-component">
        <button onClick={()=>actions.loadList()}>1111111111111</button>
        <div></div>
      </div>
    );
  }
}

InsureComponent.displayName = 'SellInsureComponent';

// Uncomment properties you need
// InsureComponent.propTypes = {};
// InsureComponent.defaultProps = {};

export default InsureComponent;
