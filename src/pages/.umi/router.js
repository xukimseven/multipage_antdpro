import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/amazingpiggy/projects/github/multipage_antdpro/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BlankLayout" */ '../../layouts/BlankLayout'),
          LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BlankLayout').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__CustomLayout__CustomPageLayout" */ '../../layouts/CustomLayout/CustomPageLayout'),
              LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                .default,
            })
          : require('../../layouts/CustomLayout/CustomPageLayout').default,
        routes: [
          {
            path: '/',
            redirect: '/home',
            exact: true,
          },
          {
            path: '/home',
            name: 'home',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__CustomPages__Home" */ '../CustomPages/Home'),
                  LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                    .default,
                })
              : require('../CustomPages/Home').default,
            exact: true,
          },
          {
            path: '/project',
            name: 'project',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__CustomPages__Project" */ '../CustomPages/Project'),
                  LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                    .default,
                })
              : require('../CustomPages/Project').default,
            exact: true,
          },
          {
            path: '/task',
            name: 'task',
            routes: [
              {
                path: '/task/index',
                name: 'index',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__CustomLayout__CustomPageLayout" */ '../CustomPages/Task'),
                      LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../CustomPages/Task').default,
                exact: true,
              },
              {
                path: '/task/test2',
                name: 'test2',
                routes: [
                  {
                    path: '/task/test2/page1',
                    name: 'page1',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          component: () =>
                            import(/* webpackChunkName: "layouts__CustomLayout__CustomPageLayout" */ '../CustomPages/Task/test2/test2page1'),
                          LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../CustomPages/Task/test2/test2page1').default,
                    exact: true,
                  },
                  {
                    path: '/task/test2/page2',
                    name: 'page2',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          component: () =>
                            import(/* webpackChunkName: "layouts__CustomLayout__CustomPageLayout" */ '../CustomPages/Task/test2/test2page2'),
                          LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../CustomPages/Task/test2/test2page2').default,
                    exact: true,
                  },
                  {
                    component: () =>
                      React.createElement(
                        require('/Users/amazingpiggy/projects/github/multipage_antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                          .default,
                        { pagesPath: 'src/pages', hasRoutesInConfig: true },
                      ),
                  },
                ],
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/amazingpiggy/projects/github/multipage_antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/system',
            name: 'system',
            routes: [
              {
                path: '/system/index',
                name: 'index',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__CustomLayout__CustomPageLayout" */ '../CustomPages/SystemPage'),
                      LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../CustomPages/SystemPage').default,
                exact: true,
              },
              {
                path: '/system/test3',
                name: 'test3',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__CustomLayout__CustomPageLayout" */ '../CustomPages/SystemPage/test3'),
                      LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../CustomPages/SystemPage/test3').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/amazingpiggy/projects/github/multipage_antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/amazingpiggy/projects/github/multipage_antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/Users/amazingpiggy/projects/github/multipage_antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('/Users/amazingpiggy/projects/github/multipage_antdpro/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('/Users/amazingpiggy/projects/github/multipage_antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
