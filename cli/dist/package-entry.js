import DemoButton from '/Users/wanlixin/all/practice/vant/src/demo-button';
import KitIndexCard from '/Users/wanlixin/all/practice/vant/src/kit-index-card';
import KitIndexList from '/Users/wanlixin/all/practice/vant/src/kit-index-list';

const version = '1.0.0';

function install(Vue) {
  const components = [
    DemoButton,
    KitIndexCard,
    KitIndexList
  ];

  components.forEach(item => {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  DemoButton,
  KitIndexCard,
  KitIndexList
};

export default {
  install,
  version
};
