'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames/bind';
import {Cells, Form, FormCell, Input, Cell, CellBody, CellFooter, Button, Article} from 'react-weui';
import styles from 'styles/sell/List.scss';
import 'app-mobiscroll';
const cx = classNames.bind(styles);

class InsureComponent extends React.Component {
  componentDidMount() {
    const {actions} = this.props;
    var dom = ReactDom.findDOMNode(this.refs.activeDate);
    $(dom).mobiscroller({
      minDate: new Date(),
      onSelect: function (valueText, inst) {
        var selectedDate = inst.getVal(); // Call the getVal method
        actions.sellSet({ activeDate: selectedDate })
      }
    });
  }
  render() {
    const {actions, sell_state} = this.props;
    const {activeDate} = sell_state;
    const activeDateStr = activeDate.format('yyyy-MM-dd');
    let expireDate = new Date(activeDate);
    expireDate.setFullYear(activeDate.getFullYear() + 1);
    const expireDateStr = expireDate.format('yyyy-MM-dd');
    return (
      <div>
        <img className={cx('img') } src="./../../images/u20.PNG" />
        <Cells access={true}>
          <Cell onClick={() => actions.push('/intro') }>
            <CellBody>
              <h3>粉红关爱险</h3>
              <p>宫颈癌最高理赔： 30, 000元</p>
              <p>宫颈癌</p>
              <p>投保30天后方可申请理赔</p>
            </CellBody>
            <CellFooter></CellFooter>
          </Cell>
          <Cell htmlFor="activeDateIpt">
            <CellBody>生效日期</CellBody>
            <CellFooter>{activeDateStr}</CellFooter>
          </Cell>
          <Cell className="no_access">
            <CellBody>保障时间</CellBody>
            <CellFooter>1年</CellFooter>
          </Cell>
          <Cell onClick={() => actions.push('/form/active/') }>
            <CellBody>投保人信息</CellBody>
            <CellFooter>张三</CellFooter>
          </Cell>
          <Cell onClick={() => actions.push('/form/passive/') }>
            <CellBody>被保人信息</CellBody>
            <CellFooter>张三</CellFooter>
          </Cell>
          <Cell className="no_access">
            <CellBody>保险期限</CellBody>
            <CellFooter>
              <p>{activeDateStr}<span className={cx('black', 'limit') }>0时起</span></p>
              <p className={cx('black', 'limit') }>至</p>
              <p>{expireDateStr}<span className={cx('black', 'limit') }>24时止</span></p>
            </CellFooter>
          </Cell>
          <Cell className="no_access">
            <CellBody>投保金额</CellBody>
            <CellFooter><span className={cx('price') }>365.00<span className={cx('unit') }>元</span></span></CellFooter>
          </Cell>
        </Cells>
        <Article>
          <section>
            <Button>立即投保</Button>
            <p className="black font-s">
              <label>
                <input type="checkbox" checked/>
                我已认真阅读《保险条款》和《重要告知》，了解并接受包括有关责任条款及免除责任条款、承保地域限制等约定。
              </label>
            </p>
          </section>
        </Article>
        <div className="ng-hide">
          <input type="text" id="activeDateIpt" ref="activeDate"/>
        </div>
      </div>
    );
  }
}

InsureComponent.displayName = 'SellInsureComponent';

// Uncomment properties you need
// InsureComponent.propTypes = {};
// InsureComponent.defaultProps = {};

export default InsureComponent;
