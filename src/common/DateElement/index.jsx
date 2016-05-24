'use strict';

import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import 'app-mobiscroll';
require('./date.scss');

class DateElement extends React.Component {
  componentDidMount() {
    var dom = ReactDom.findDOMNode(this.refs.dateElement);
    $(dom).mobiscroller({
      onSelect: (valueText, inst) => {
        var valueAsDate = inst.getVal(); // Call the getVal method
        this.props.onSelect && this.props.onSelect({ valueText, valueAsDate })
      }
    });
  }
  render() {
    const {children, ...other} = this.props;
    return (
      children ? React.cloneElement(children, {
        ...other,
        ref:"dateElement"
      }) :  <input type="text" ref="dateElement" {...other}/>
    );
  }
}

DateElement.displayName = 'DateElement';

// Uncomment properties you need
DateElement.propTypes = {
  onSelect: PropTypes.func
};
DateElement.defaultProps = {
  date: () => new Date
};

export default DateElement;
