import React, { PureComponent } from 'react';
import { Icon, Menu, Layout } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import _ from 'lodash';
import { Tools } from '@/layouts/CustomLayout/tools';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

@connect(({ loading, routers, Test }) => ({ loading, routers, Test }))
export default class BimPageSide extends PureComponent {
  state = {};

  componentDidMount() {
    // this.props.dispatch({
    //   type: 'Test/singleProvinceJson',
    //   payload: {
    //     province: '北京',
    //     deep: 4,
    //   },
    //   callback: res => {
    //     console.log('BimPageSide', res);
    //   },
    // });
  }

  jump = data => {
    console.log('jump', data);
    const { onJump } = this.props;
    if (onJump) {
      onJump(data);
    }
  };

  render() {
    const {
      collapsed,
      showLogo,
      theme,
      sideData,
      routers: { currentRouter },
    } = this.props;

    const getMenuItem = data => {
      return (
        <Menu.Item key={data.name} onClick={() => this.jump(data)}>
          <Icon type={data.icon} />
          <span>{data.title}</span>
        </Menu.Item>
      );
    };

    const getMenuGroup = data => {
      if (data.children.length) {
        return (
          <Menu.ItemGroup key={data.name} title={data.title}>
            {data.children.map((c, i) => {
              return getMenuItem(c);
            })}
          </Menu.ItemGroup>
        );
      } else {
        return getMenuItem(data);
      }
    };

    const getMenu = route => {
      if (route.children.length) {
        return (
          <SubMenu
            key={route.name}
            title={
              <span>
                <Icon type={route.icon} />
                <span>{route.title}</span>
              </span>
            }
          >
            {route.children.map((r, i) => {
              return getMenuGroup(r);
            })}
          </SubMenu>
        );
      } else {
        return getMenuItem(route);
      }
    };

    const getSelectedKeys = () => {
      const { select } = Tools.getCurrentRouter(sideData, currentRouter.path);
      return select;
    };

    const getOpenKeys = () => {
      const open = [];
      sideData.map((s, idx) => {
        open.push(s.name);
      });
      return open;
    };

    return (
      <>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ background: theme === 'light' ? '#fff' : '' }}
        >
          {showLogo ? (
            <div
              className="logo"
              style={{
                height: 32,
                background: 'rgba(255, 255, 255, 0.2)',
                margin: 16,
              }}
            />
          ) : (
            ''
          )}
          <Menu
            theme={theme}
            mode="inline"
            defaultOpenKeys={getOpenKeys()}
            selectedKeys={getSelectedKeys()}
            style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}
          >
            {sideData.length
              ? sideData.map((route, idx) => {
                return getMenu(route);
              })
              : ''}
          </Menu>
        </Sider>
      </>
    );
  }
}
