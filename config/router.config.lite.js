export const routes = [
  {
    path: "/",
    component: "../layouts/BlankLayout",
    routes: [
      {
        path: "/",
        component: "../layouts/CustomLayout/CustomPageLayout",
        routes: [
          {
            path: "/",
            redirect: "/home"
          },
          {
            path: "/home",
            name: "home",
            component: "./CustomPages/Home"
          },
          {
            path: "/project",
            name: "project",
            component: "./CustomPages/Project"
          },
          {
            path: "/task",
            name: "task",
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
            path: "/system",
            name: "system",
            routes: [
              {
                path: "/system/index",
                name: "index",
                component: "./CustomPages/SystemPage"
              },
              {
                path: "/system/test3",
                name: "test3",
                component: "./CustomPages/SystemPage/test3"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    component: "./404"
  }
];
