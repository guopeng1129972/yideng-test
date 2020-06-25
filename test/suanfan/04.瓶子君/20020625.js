/* 阿里编程题：实现一个方法，拆解URL参数中queryString
入参格式参考：
const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
出参格式参考：
const result = { a: '1', b: '2', c: 'xx', d: '' };
// 拆解URL参数中queryString，返回一个 key - value 形式的 object */

const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';

const queryString = (url) => {
  let urlStrList = url.split("/?")[1].split('#')[0].split('&')
  let urlData = {};
  for (let [index, urlStr] of urlStrList.entries()) {
    let itemList = urlStr.split('=')
    urlData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return urlData
}

//有些许问题，github上以提