export const routes = [
  // 主页
  {
    path: "/home",
    component: "../layouts/CustomLayout/CustomPageLayout",
    routes: [
      {
        path: "/home",
        name: "home",
        component: "./CustomPages/Home"
      }
    ]
  },

  // 项目
  {
    path: "/project",
    component: "../layouts/CustomLayout/CustomPageLayout",
    routes: [
      {
        path: "/project",
        name: "project",
        component: "./CustomPages/Project"
      }
    ]
  },

  // 任务
  {
    path: "/task",
    component: "../layouts/CustomLayout/CustomPageLayout",
    routes: [
      {
        path: "/task/index",
        name: "index",
        component: "./CustomPages/Task"
      },
      {
        path: "/task/test2",
        name: "test2",
        routes: [
          {
            path: "/task/test2/page1",
            name: "page1",
            component: "./CustomPages/Task/test2/test2page1"
          },
          {
            path: "/task/test2/page2",
            name: "page2",
            component: "./CustomPages/Task/test2/test2page2"
          }
        ]
      }
    ]
  },

  {
    path: "/",
    redirect: "/home"
  },
  // 404
  {
    component: "./404"
  }
];
