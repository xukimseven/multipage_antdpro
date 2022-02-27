import React, { PureComponent } from 'react';
import { Icon, Layout, Button, Dropdown, Menu } from 'antd';
import PageCssData from '@/static/PageCssData';
import { connect } from 'dva';
import _ from 'lodash';
import styles from './styles.less';
import cs from 'classnames';

const { gap_normal } = PageCssData;
const { Header } = Layout;

@connect(({ User, routers }) => ({ User, routers }))
export default class BimPageHeader extends PureComponent {
  state = {};

  componentDidMount() {}

  logout = () => {
    // this.props.dispatch({
    //   type: 'User/userLogout',
    //   payload: {},
    //   callback: res => {
    //     console.log(res);
    //     this.props.dispatch({
    //       type: 'routers/save',
    //       payload: { routers: [], currentRouter: {} },
    //     });
    //     window.location.href = '#/login';
    //   },
    // });
  };

  render() {
    const {
      collapsed,
      onCollapsed,
      User: { userInfo },
    } = this.props;

    const menu = (
      <div className={cs(styles.userMenu)}>
        <div className={cs(styles.menuBody)}>
          <div className={cs(styles.menuItem)}>姓名：{userInfo.first_name}</div>
          <div className={cs(styles.menuItem)}>手机：{userInfo.username}</div>
        </div>
        <div className={cs(styles.menuFooter)}>
          <div
            className={cs(styles.footerItem)}
            onClick={() => {
              this.logout();
            }}
          >
            注销
          </div>
        </div>
      </div>
    );

    return (
      <>
        <Header
          style={{ background: '#fff', padding: `0 ${gap_normal}px`, ...PageCssData.flexBetween }}
        >
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => {
              if (onCollapsed) {
                onCollapsed();
              }
            }}
          />
          <div className={cs(styles.headerRight)}>
            <Dropdown overlay={menu}>
              <div className={cs(styles.userArea)}>
                {userInfo.first_name ? userInfo.first_name.substr(0, 1) : ''}
              </div>
            </Dropdown>
          </div>
        </Header>
      </>
    );
  }
}
