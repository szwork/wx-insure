'use strict';

import React from 'react';
import classNames from 'classnames/bind';
import {Panel,PanelBody,MediaBox,MediaBoxTitle,MediaBoxDescription,MediaBoxInfo,MediaBoxInfoMeta} from 'react-weui';
import styles from 'styles/sell/List.scss';
import {cent2Yuan} from 'util';
const cx = classNames.bind(styles);

const ProductList = (props)=>{
  let {
    productid,
    name,
    type,
    slogan,
    price,
    unit,
    bgimgurl,
    actions,
  } = props;
  /**
    <MediaBoxInfoMeta>宫颈癌</MediaBoxInfoMeta>
    <MediaBoxInfoMeta extra={true}>乳腺癌</MediaBoxInfoMeta>
    <MediaBoxInfoMeta extra={true}>保障一年</MediaBoxInfoMeta>
   */
  return (
    <Panel access={true}>
      <PanelBody onClick={()=>actions.push('/insure')}>
        <MediaBox>
          <MediaBoxDescription>
            <img className={cx('img')} src={bgimgurl} />
          </MediaBoxDescription>
          <MediaBoxTitle>{name} <span className={cx('price')}>{cent2Yuan(price)}<span className={cx('unit')}>元</span></span></MediaBoxTitle>
          <MediaBoxInfo>
            {slogan}
          </MediaBoxInfo>
        </MediaBox>
      </PanelBody>
    </Panel>
  )
}

class ListComponent extends React.Component {
  componentWillMount(){
    this.props.actions.loadList();
  }
  render() {
    const {insure, actions} = this.props;
    console.log(insure);
    return (
      <div className="grey-bg">
        <div className={cx('banner')}></div>
        <div className="weui_cells_title h1">推荐产品</div>
        <div className={cx('list')}>
          {
            insure.map((item,idx)=><ProductList {...item} actions={actions} key={`${item.productid}${idx}`} />)
          }
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
