/*
在官网下载并安装就行了
mac上没什么区别


结果：

macbookdeMacBook-Pro-2:~ mac$ node -v
v12.11.1
macbookdeMacBook-Pro-2:~ mac$ npm -v
6.11.3
macbookdeMacBook-Pro-2:~ mac$
就行了
*/


/*
安装karma
karma是一个管理测试工具的管理测试框架的框架
npm install --save-dev karma
官网
*/



/*
npm 太慢

npm config set registry http://registry.npm.taobao.org
npm config get registry
换了国内镜像，安装速度就很快了。

在项目下安装运行环境
test123 mac$  ./node_modules/.bin/karma init


*/

/*
修改测试的文件目录
测试的具体项目
*/

files: [
    'src/**/*.js',
    'test/**/*.spec.js',

  ]
/*
目录下带**表示当前及所有的子目录
*/
  /*
  通过jasmine引入用例
  */
  describe("测试window.add函数", function () {
    it("常规输入", function () {
        expect(add(2,3)).toBe(5);
    });
    it("常规输入", function () {
        expect(utils.add(2,3)).toBe(5);
    });
    it("分支0的case", function () {
        expect(utils.add(0, 2)).toBe(3);
    });
});


/*
安装karma-coverage
npm install karma karma-coverage --save-dev
*/