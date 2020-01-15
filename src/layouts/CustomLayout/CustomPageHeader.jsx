import React, { PureComponent } from 'react';
import { Icon, Layout } from 'antd';
import PageCssData from '@/static/PageCssData';

const { gap_normal } = PageCssData;
const { Header } = Layout;

export default class CustomPageHeader extends PureComponent {
  state = {};

  componentDidMount() {}

  render() {
    const { collapsed, onCollapsed } = this.props;
    return (
      <>
        <Header style={{ background: '#fff', padding: `0 ${gap_normal}px` }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => {
              if (onCollapsed) {
                onCollapsed();
              }
            }}
          />
        </Header>
      </>
    );
  }
}
