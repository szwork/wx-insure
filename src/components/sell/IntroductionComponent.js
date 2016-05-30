'use strict';

import React from 'react';
import {Article} from 'react-weui';

function  IntroductionComponent(props){
  const { params } = props;
  const { type } = params;
  return (
    <div>
      <Article>
        <section className={ type === '1' ? 'ng-show' : 'ng-hide'}>
          <img src="./../../images/intro-1.PNG" />
          <img src="./../../images/intro-2.PNG" />
          <img src="./../../images/intro-3.PNG" />
          <img src="./../../images/intro-4.PNG" />
        </section>
        <section className={ type === '2' ? 'ng-show' : 'ng-hide'}>
          <img src="./../../images/intro-5.jpg" />
        </section>
      </Article>
    </div>
  );
}

IntroductionComponent.displayName = 'SellIntroductionComponent';

// Uncomment properties you need
// IntroductionComponent.propTypes = {};
// IntroductionComponent.defaultProps = {};

export default IntroductionComponent;
