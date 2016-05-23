'use strict';

import React from 'react';
import classNames from 'classnames/bind';
import {Article, Form, FormCell, CellBody, CellHeader, Label, Button, Input, Select} from 'react-weui';
import styles from 'styles/sell/List.scss';
const cx = classNames.bind(styles);

class FormComponent extends React.Component {
  render() {
    const { params, actions } = this.props;
    const { people } = params;
    return (
      <div>
        <div className={cx('hd')}>{ people === 'active' ? '投保人信息' : '被保人信息'}</div>
        <Form>
          <FormCell>
            <CellHeader><Label>姓名</Label></CellHeader>
            <CellBody><Input type="text" /></CellBody>
          </FormCell>
          <FormCell select selectPos="after">
            <CellHeader>
              <Label>证件类型</Label>
            </CellHeader>
            <CellBody>
              <Select>
                <option value="1">居民身份证</option>
              </Select>
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader><Label>证件号码</Label></CellHeader>
            <CellBody><Input type="text" /></CellBody>
          </FormCell>
          <FormCell>
            <CellHeader><Label>出生日期</Label></CellHeader>
            <CellBody><Input type="date"/></CellBody>
          </FormCell>
          {
            people === 'active' ? <FormCell>
              <CellHeader><Label>性别</Label></CellHeader>
              <CellBody><Input type="date"/></CellBody>
            </FormCell> : null
          }
          {
            people === 'active' ? <FormCell>
              <CellHeader><Label>关系</Label></CellHeader>
              <CellBody>
                <Select>
                  <option value="1">本人</option>
                </Select>
              </CellBody>
            </FormCell> : null
          }
          {
            people === 'passive' ? <FormCell>
              <CellHeader><Label>手机号</Label></CellHeader>
              <CellBody><Input type="tel"/></CellBody>
            </FormCell> : null
          }
          {
            people === 'passive' ? <FormCell>
              <CellHeader><Label>电子邮箱</Label></CellHeader>
              <CellBody><Input type="email"/></CellBody>
            </FormCell> : null
          }
        </Form>
        <Article>
          <section>
            <Button onClick={actions.goBack}>确定</Button>
          </section>
        </Article>
      </div>
    );
  }
}

FormComponent.displayName = 'SellFormComponent';

// Uncomment properties you need
// FormComponent.propTypes = {};
// FormComponent.defaultProps = {};

export default FormComponent;
