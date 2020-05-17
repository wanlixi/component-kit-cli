/*
 * @Author: wanlixin
 * @Date: 2020-05-10 16:43:45
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 09:53:19
 * @Description: 
 */
import Vue from 'vue';
import PackageEntry from './package-entry';
import './package-style';

import DemoButton from '/Users/wanlixin/all/practice/vora/src/demo-button/demo/index.vue';
import KitIndexCard from '/Users/wanlixin/all/practice/vora/src/kit-index-card/demo/index.vue';
import KitIndexList from '/Users/wanlixin/all/practice/vora/src/kit-index-list/demo/index.vue';

Vue.use(PackageEntry);

DemoButton.name = 'demo-demo-button';
KitIndexCard.name = 'demo-kit-index-card';
KitIndexList.name = 'demo-kit-index-list';

export const demos = {
  DemoButton,
  KitIndexCard,
  KitIndexList
};
export const config = {
  "name": "Kit",
  "build": {
    "css": {
      "preprocessor": "less"
    },
    "site": {
      "publicPath": "/kit/"
    }
  },
  "site": {
    "title": "Kit",
    "logo": "https://raw.githubusercontent.com/wanlixi/vue-goTop/master/favicon.ico",
    "nav": [
      {
        "title": "基础组件",
        "items": [
          {
            "path": "demo-button",
            "title": "Button"
          }
        ]
      },
      {
        "title": "业务组件",
        "items": [
          {
            "path": "kit-index-card",
            "title": "指标单元"
          },
          {
            "path": "kit-index-list",
            "title": "指标列表"
          }
        ]
      }
    ]
  }
}
