import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import CustomPageSide from '@/layouts/CustomLayout/CustomPageSide';
import CustomPageHeader from '@/layouts/CustomLayout/CustomPageHeader';
import PageCssData from '@/static/PageCssData';
import CustomTopRouterTabs from '@/layouts/CustomLayout/CustomTopRouterTabs';

const { gap_normal, gap_small } = PageCssData;
const { Header, Sider, Content } = Layout;

const edge_client_width = 1200;

export default class CustomPageLayout extends PureComponent {
  state = {
    collapsed: false,
    showLogo: true,
    theme: 'dark',
  };

  componentDidMount() {
    this.checkPageWidth();
    window.onresize = () => {
      this.checkPageWidth();
    };
  }

  checkPageWidth = () => {
    const {
      documentElement: { clientWidth },
    } = document;
    // console.log('onresize ==============================', clientWidth);
    if (clientWidth <= edge_client_width) {
      this.setState({
        collapsed: true,
      });
    }
  };

  trigger = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed, showLogo, theme } = this.state;
    const { children } = this.props;
    return (
      <Layout>
        <CustomPageSide collapsed={collapsed} showLogo={showLogo} theme={theme} />
        <Layout>
          <CustomPageHeader collapsed={collapsed} onCollapsed={this.trigger} />
          <CustomTopRouterTabs />
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
