export const testRouter = [
  {
    name: 'home',
    title: '首页',
    path: '/home',
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
];
