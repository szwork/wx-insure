'use strict';

import React from 'react';
import {Article} from 'react-weui';

function  IntroductionComponent(){
  return (
    <div>
      <Article>
        <section>
          <img src="./../../images/intro-1.PNG" />
          <img src="./../../images/intro-2.PNG" />
          <img src="./../../images/intro-3.PNG" />
          <img src="./../../images/intro-4.PNG" />
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
