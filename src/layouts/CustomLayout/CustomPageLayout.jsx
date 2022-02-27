import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, message } from 'antd';
import BimPageSide from '@/layouts/CustomLayout/CustomPageSide';
import BimPageHeader from '@/layouts/CustomLayout/CustomPageHeader';
import PageCssData from '@/static/PageCssData';
import BimTopRouterTabs from '@/layouts/CustomLayout/CustomTopRouterTabs';
import { connect } from 'dva';
import { testRouter } from './testRouter';
import _ from 'lodash';
import router from 'umi/router';
import { Tools } from '@/layouts/CustomLayout/tools';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { gap_normal, gap_small } = PageCssData;

const { Header, Sider, Content } = Layout;
const edgeClientWidth = 1200;

@connect(({ routers, User }) => ({ routers, User }))
export default class BimPageLayout extends PureComponent {
  state = {
    collapsed: false,
    showLogo: false,
    theme: 'dark',

    sideData: testRouter,
  };

  componentDidMount() {
    this.checkLogin();

    this.checkPageWidth();
    window.onresize = () => {
      this.checkPageWidth();
    };
    // console.log(this.props);
    setTimeout(() => {
      this.makeRouter();
    }, 200);
  }

  checkLogin = () => {
    // this.props.dispatch({
    //   type: 'User/checkLogin',
    //   payload: {},
    //   callback: res => {
    //     console.log('checkLogin', res);
    //     const { status, data } = res;
    //     if (status === 200 && !data.id) {
    //       window.location.href = '#/login';
    //       message.info('您未登录！');
    //     }
    //   },
    // });
  };

  makeRouter = () => {
    const {
      location: { pathname },
    } = this.props;
    const { sideData } = this.state;
    // console.log('------', sideData);
    const home = sideData[0];
    this.makeRouterSave({
      ...home,
    });
    if (pathname !== home.path) {
      const { currentRouter } = Tools.getCurrentRouter(sideData, pathname);
      this.makeRouterSave({
        ...currentRouter,
      });
    }
  };

  makeRouterSave = data => {
    const {
      routers: { routers },
    } = this.props;
    const { path } = data;
    const checkRoute = _.filter(routers, d => d.path === path);
    if (!checkRoute.length) {
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

  // 监控页面宽度变化
  checkPageWidth = () => {
    const {
      documentElement: { clientWidth },
    } = document;
    if (clientWidth <= edgeClientWidth) {
      this.setState({
        collapsed: true,
      });
    }
  };

  // 触发侧边栏折叠展开
  trigger = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed, showLogo, theme, sideData } = this.state;
    const { children } = this.props;
    return (
      <Layout>
        <BimPageSide
          collapsed={collapsed}
          showLogo={showLogo}
          theme={theme}
          sideData={sideData}
          onJump={data => {
            console.log('=====onJump', data);
            router.push(data.path);
            this.makeRouterSave(data);
          }}
        />
        <Layout>
          <BimPageHeader collapsed={collapsed} onCollapsed={this.trigger} />
          <BimTopRouterTabs />
          <Content
            style={{
              margin: gap_small,
              padding: gap_normal,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
