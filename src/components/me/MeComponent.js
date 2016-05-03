'use strict';

import React from 'react';

require('styles/me/Me.scss');

class MeComponent extends React.Component {
  render() {
    return (
      <div className="me-component">
        Please edit src/components/me//MeComponent.js to update this component!
      </div>
    );
  }
}

MeComponent.displayName = 'MeMeComponent';

// Uncomment properties you need
// MeComponent.propTypes = {};
// MeComponent.defaultProps = {};

export default MeComponent;
