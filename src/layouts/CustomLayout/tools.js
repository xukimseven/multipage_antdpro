import _ from 'lodash';

export const Tools = {
  getCurrentRouter: (list, path) => {
    let select = [];
    let currentRouter = {};
    for (let idx = 0; idx < list.length; idx++) {
      const route = list[idx];
      if (!route.children.length) {
        if (path === route.path) {
          select = [`${route.name}`];
          currentRouter = { ...route };
          break;
        }
      } else {
        for (let i = 0; i < route.children.length; i++) {
          const r = route.children[i];
          if (!r.children.length) {
            if (path === r.path) {
              select = [`${r.name}`];
              currentRouter = { ...r };
              break;
            }
          } else {
            const selectItem = _.find(r.children, d => d.path === path);
            if (selectItem) {
              select = [`${selectItem.name}`];
              currentRouter = { ...selectItem };
            }
          }
        }
      }
    }
    return { select, currentRouter };
  },
};
