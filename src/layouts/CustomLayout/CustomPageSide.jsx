import React, { PureComponent } from 'react';
import { Icon, Menu, Layout } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import _ from 'lodash';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

@connect(({ routers, loading }) => ({ routers, loading }))
export default class CustomPageSide extends PureComponent {
  state = {
    routers: [
      {
        name: 'home',
        title: '首页',
        path: '/',
        icon: 'home',
        children: [],
      },
      {
        name: 'project',
        title: '项目',
        path: '/project',
        icon: 'project',
        children: [],
      },
      {
        name: 'task',
        title: '任务',
        path: '',
        icon: 'book',
        children: [
          {
            name: 'task_index',
            title: '任务首页',
            path: '/task/index',
            icon: 'down',
            children: [],
          },
          {
            name: 'task_test2',
            title: '任务测试页面',
            path: '',
            icon: 'home',
            children: [
              {
                name: 'task_test2_page1',
                title: '测试页面1',
                path: '/task/test2/page1',
                icon: 'project',
                children: [],
              },
              {
                name: 'task_test2_page2',
                title: '测试页面2',
                path: '/task/test2/page2',
                icon: 'home',
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: 'system',
        title: '系统',
        path: '',
        icon: 'edit',
        children: [
          {
            name: 'system_index',
            title: '系统首页',
            path: '/system/index',
            icon: 'down',
            children: [],
          },
          {
            name: 'system_test3',
            title: '系统测试页面',
            path: '/system/test3',
            icon: 'home',
            children: [],
          },
        ],
      },
    ],
  };

  componentDidMount() {
    this.makeRouterSave({
      ...this.state.routers[0],
    });
  }

  jump = data => {
    router.push(data.path);
    this.makeRouterSave(data);
  };

  makeRouterSave = data => {
    const {
      routers: { routers },
    } = this.props;
    const { name } = data;
    const check_route = _.filter(routers, d => d.name === name);
    if (!check_route.length) {
      this.saveEvent(
        [
          ...routers,
          {
            ...data,
          },
        ],
        { ...data },
      );
    } else {
      this.saveEvent([...routers], { ...data });
    }
  };

  saveEvent = (routers, currentRouter) => {
    this.props.dispatch({
      type: 'routers/save',
      payload: {
        routers: [...routers],
        currentRouter: { ...currentRouter },
      },
    });
  };

  render() {
    const {
      collapsed,
      showLogo,
      theme,
      routers: { currentRouter },
    } = this.props;
    const { routers } = this.state;

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

    const currentSelect = () => {
      // console.log('===//////', routers, currentRouter);
      let select = [];
      for (let idx = 0; idx < routers.length; idx++) {
        const route = routers[idx];
        if (!route.children.length) {
          if (currentRouter.path === route.path) {
            select = [`${route.name}`];
            break;
          }
        } else {
          for (let i = 0; i < route.children.length; i++) {
            const r = route.children[i];
            if (!r.children.length) {
              if (currentRouter.path === r.path) {
                select = [`${r.name}`];
                break;
              }
            } else {
              const selectItem = _.find(r.children, d => d.path === currentRouter.path);
              if (selectItem) {
                select = [`${selectItem.name}`];
              }
            }
          }
        }
      }

      return select;
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
            defaultSelectedKeys={['1']}
            selectedKeys={currentSelect()}
            style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}
          >
            {routers.map((route, idx) => {
              return getMenu(route);
            })}
          </Menu>
        </Sider>
      </>
    );
  }
}
