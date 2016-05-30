'use strict';

import React from 'react';
import classNames from 'classnames/bind';
import {Cells, Form, FormCell, Input, Cell, CellBody, CellFooter, Button, Article} from 'react-weui';
import styles from 'styles/sell/List.scss';
const cx = classNames.bind(styles);

class EntityComponent extends React.Component {
  render() {
    const {actions} = this.props;
    return (
      <div>
        <img className={cx('img') } src="./../../images/u20.PNG" />
        <Cells access={true}>
          <Cell onClick={() => actions.push('/intro/2') }>
            <CellBody>
              <h3>瑞博士书</h3>
              <p>关爱女性健康</p>
              <p>健康生活早知道</p>
            </CellBody>
            <CellFooter></CellFooter>
          </Cell>
          <Cell htmlFor="entName">
            <CellBody>姓名</CellBody>
            <CellFooter>张三</CellFooter>
          </Cell>
          <Cell htmlFor="entConcat">
            <CellBody>联系方式</CellBody>
            <CellFooter>13587451120</CellFooter>
          </Cell>
          <Cell >
            <CellBody>收货地址</CellBody>
            <CellFooter>广州市 天河区</CellFooter>
          </Cell>
          <Cell className="no_access">
            <CellBody>购买金额</CellBody>
            <CellFooter><span className={cx('price') }>66.00<span className={cx('unit') }>元</span></span></CellFooter>
          </Cell>
        </Cells>
        <Article>
          <section>
            <Button>立即购买</Button>
          </section>
        </Article>
      </div>
    );
  }
}

EntityComponent.displayName = 'SellEntityComponent';

// Uncomment properties you need
// EntityComponent.propTypes = {};
// EntityComponent.defaultProps = {};

export default EntityComponent;
