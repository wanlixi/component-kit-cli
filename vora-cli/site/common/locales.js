/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:50:57
 * @Description: 
 */
const ZH_CN = 'zh-CN';
const EN_US = 'en-US';
const CACHE_KEY = 'vora-cli-lang';

let currentLang = ZH_CN;

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(CACHE_KEY, lang);
}

export function setDefaultLang(langFromConfig) {
  const cached = localStorage.getItem(CACHE_KEY);

  if (cached) {
    currentLang = cached;
    return;
  }

  if (navigator.language && navigator.language.indexOf('zh-') !== -1) {
    currentLang = ZH_CN;
    return;
  }

  currentLang = langFromConfig || EN_US;
}
