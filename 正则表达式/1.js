// 匹配一个前三位数字，后6位字母
let regit = /[0-9]{3}[a-zA-Z]{9}/;
regit.test('123aaaaaaaaa')