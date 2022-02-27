import defaultSettings from "./defaultSettings"; // https://umijs.org/config/

import slash from "slash2";
import themePluginConfig from "./themePluginConfig";
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

import { routes } from "./router.config.multi";

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview =
  ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === "site";
const plugins = [
  [
    "umi-plugin-react",
    {
      antd: true,
      dva: {
        hmr: true
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: "zh-CN",
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true
      },
      dynamicImport: {
        loadingComponent: "./components/PageLoading/index",
        webpackChunkName: true,
        level: 3
      },
      pwa: pwa
        ? {
            workboxPluginMode: "InjectManifest",
            workboxOptions: {
              importWorkboxFrom: "local"
            }
          }
        : false // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    }
  ],
  [
    "umi-plugin-pro-block",
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true
    }
  ]
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    "umi-plugin-ga",
    {
      code: "UA-72788897-6"
    }
  ]);
  plugins.push(["umi-plugin-antd-theme", themePluginConfig]);
}

export default {
  /**
   * umi 相关配置
   */
  // 插件
  plugins,

  // 路由
  // umi routes: https://umijs.org/zh/guide/router.html
  routes,

  // 禁用 redirect 上提
  // 出于一些原因的考虑，我们在处理路由时把所有 redirect 声明提到路由最前面进行匹配，但这导致了一些问题，所以添加了这个配置项，禁用 redirect 上提。
  // 默认: false
  disableRedirectHoist: true,

  // 指定 history 类型，可选 browser、hash 和 memory。
  // 默认: browser
  history: "hash",

  // outputPath 编译输出目录
  outputPath: "./abc",

  // 指定 react-router 的 base，部署到非根目录时需要配置。
  base: "",

  // publicPath 指向静态资源文件所在的路径。
  publicPath: "",

  // 值为 true 时使用 HTML 里指定的 window.publicPath。
  // 默认: false
  runtimePublicPath: false,

  // 默认同publicPath
  // 为 CSS 指定额外的 publicPath
  // cssPublicPath: '',

  // 指定 react app 渲染到的 HTML 元素 id
  // 默认 root
  mountElementId: "root",

  // minimizer 压缩器
  // minimizer:'',
  // 默认值：uglifyjs
  // 选项：uglifyjs|terserjs

  // 是否开启 hash 文件后缀
  hash: true,

  // 配置浏览器最低版本
  // { chrome: 49, firefox: 45, safari: 10, edge: 13, ios: 10 }
  targets: {
    ie: 11
  },

  // 配置全局 context，会覆盖到每个 pages 里的 context。
  context: {},

  // exportStatic
  // 如果设为 true 或 Object，则导出全部路由为静态页面，否则默认只输出一个 index.html。
  // 默认为 false
  // Boolean | Object
  // exportStatic: true,
  exportStatic: {
    // 在路由里添加 .html 的后缀
    // htmlSuffix: true,
    // 任意部署
    // dynamicRoot: true
  },

  // mock.exclude
  // 排除 mock 目录下不作 mock 处理的文件
  mock: {
    // exclude 所有 _ 前缀的文件和文件夹
    // exclude: ["mock/**/_*.js", "mock/_*/**/*.js"]
  },

  /**
   * webpack 相关配置
   */
  // chainWebpack
  // 没用过 拓展 webpack 的功能
  // chainWebpack: webpackPlugin,

  // 配置主题，实际上是配 less 变量。支持对象和字符串两种类型，字符串需要指向一个返回配置的文件
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // 指向某个文件也可以 -> "theme": "./theme-config.js"
  theme: {
    // ...darkTheme,
    // "@primary-color": "#1DA57A"
  },

  // treeShaking: true | false
  // 比如 ant-design-pro 开启 tree-shaking 之后，gzip 后的尺寸能减少 10K ?

  // 通过 webpack 的 DefinePlugin 传递给代码，值会自动做 JSON.stringify 处理
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || "" // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },

  // externals
  // Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime.
  // 防止捆绑某些导入的软件包，而是在运行时检索这些外部依赖项。
  // externals: {
  //   jquery: 'jQuery'
  // },

  // alias
  // Create aliases to import or require certain modules more easily. For example, to alias a bunch of commonly used src/ folders:
  // 创建别名以更轻松地导入或需要某些模块。例如，为一堆常用的src /文件夹添加别名:
  // import Utils from '../../Utils'; -> import Utils from 'Utils';
  // alias: {
  //   Utils: path.resolve(__dirname, 'src/utils/')
  // },

  // https://webpack.js.org/configuration/dev-server/#devserver
  // devServer: {},

  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes("node_modules") ||
        context.resourcePath.includes("ant.design.pro.less") ||
        context.resourcePath.includes("global.less")
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace(".less", "");
        const arr = slash(antdProPath)
          .split("/")
          .map(a => a.replace(/([A-Z])/g, "-$1"))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join("-")}-${localName}`.replace(/--/g, "-");
      }

      return localName;
    }
  },
  manifest: {
    basePath: "/"
  }
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
};
