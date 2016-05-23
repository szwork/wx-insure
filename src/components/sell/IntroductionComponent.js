'use strict';

import React from 'react';
import classNames from 'classnames/bind';
import {Cells,Cell,CellBody,CellFooter,Button} from 'react-weui';
import styles from 'styles/sell/List.scss';
const cx = classNames.bind(styles);

class IntroductionComponent extends React.Component {
  render() {
    return (
      <div>
        <img className={cx('img')} src="./../../images/u20.PNG" />
        1
      </div>
    );
  }
}

IntroductionComponent.displayName = 'SellIntroductionComponent';

// Uncomment properties you need
// IntroductionComponent.propTypes = {};
// IntroductionComponent.defaultProps = {};

export default IntroductionComponent;
