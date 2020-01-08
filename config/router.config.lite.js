export const routes = [
  {
    path: "/",
    component: "../layouts/BlankLayout",
    routes: [
      {
        name: "lite",
        path: "/",
        component: "./lite"
      }
    ]
  },
  {
    component: "./404"
  }
];
