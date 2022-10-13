# vue-page

vite开发静态博客。
源码分支：master
静态页面分支：gh-pages

## vite部署github pages步骤
1. package.json:
```json
{
    "scripts": {
        "build": "vite build",
        "deploy": "gh-pages -d dist -r https://github.com/Meloor/vue-page.git -b gh-pages"
    }
}
```
2. npm运行biud脚本进行打包，输出静态页面到dist目录
3. npm运行deploy脚本
```sh
npm run deploy
#or yarn run deploy
```
>js工具包gh-pages会打包(biuld)并且推送dist目录到远程仓库的gh-pages分支
![gh-pages](./readme/gh-pages.png)

4. github action 自动部署
>github pages设置好部署分支(gh-pages)后，只要接受到了该分支的推送，就会进行**自动部署**(**而gitee pages需要手动点击‘更新’**)，类似于vite的`vite preview`, 等待1-2分钟，进入页面就可以看到更新。
   ![gh-pages](./readme/github%20action.png)