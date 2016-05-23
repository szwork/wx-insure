'use strict';

import React from 'react';
import classNames from 'classnames/bind';
import {Panel,PanelBody,MediaBox,MediaBoxTitle,MediaBoxDescription,MediaBoxInfo,MediaBoxInfoMeta} from 'react-weui';
import styles from 'styles/sell/List.scss';
const cx = classNames.bind(styles);

class ListComponent extends React.Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="grey-bg">
        <div className={cx('banner')}></div>
        <div className="weui_cells_title h1">推荐产品</div>
        <div className={cx('list')}>
          <Panel access={true}>
            <PanelBody onClick={()=>actions.push('/insure')}>
              <MediaBox>
                <MediaBoxDescription>
                  <img className={cx('img')} src="./../../images/u20.PNG" />
                </MediaBoxDescription>
                <MediaBoxTitle>粉红关爱险 <span className={cx('price')}>365.00<span className={cx('unit')}>元</span></span></MediaBoxTitle>
                <MediaBoxInfo>
                  <MediaBoxInfoMeta>宫颈癌</MediaBoxInfoMeta>
                  <MediaBoxInfoMeta extra={true}>乳腺癌</MediaBoxInfoMeta>
                  <MediaBoxInfoMeta extra={true}>保障一年</MediaBoxInfoMeta>
                </MediaBoxInfo>
              </MediaBox>
            </PanelBody>
          </Panel>
          <Panel access={true}>
            <PanelBody>
              <MediaBox>
                <MediaBoxDescription>
                  <img className={cx('img')} src="./../../images/u20.PNG" />
                </MediaBoxDescription>
                <MediaBoxTitle>瑞博士书</MediaBoxTitle>
                <MediaBoxInfo>
                  <MediaBoxInfoMeta>宫颈癌</MediaBoxInfoMeta>
                  <MediaBoxInfoMeta extra={true}>乳腺癌</MediaBoxInfoMeta>
                  <MediaBoxInfoMeta extra={true}>保障一年</MediaBoxInfoMeta>
                </MediaBoxInfo>
              </MediaBox>
            </PanelBody>
          </Panel>
        </div>
      </div>
    );
  }
}

ListComponent.displayName = 'SellListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
