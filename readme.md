# Browser extension boilerplate
Base on [Vue](https://vuejs.org/) , [Wepack](https://webpack.github.io/) & [babel](https://babeljs.io/)(so you can write your extension with es6) . *current only tested on Chrome*

## Features
1. dev mode, autorefresh when developing, without concern about [CSP](https://developer.chrome.com/extensions/contentSecurityPolicy)
2. build script, auto pack your extension
3. [scss](http://sass-lang.com/), [less](http://lesscss.org/), vueI18n(https://kazupon.github.io/vue-i18n/old/)(localized your app with vue instead of chrome.i18n.getMessage) integrated

## Building Steps
### prepare your environment
1. install **[nodejs](https://nodejs.org/en/download/)** on your computer
2. install **yarn** as your node package manager by run `npm i yarn -g` in your shell. check [yarnpkg website](https://yarnpkg.com/en/docs/) for more information.

### install deps
run `yarn` in your shell, 

### dev
run `yarn run dev` in your shell

then open chrome and navigate to `chrome://extensions/`, click **Load unpacked extension...** and select `dist` folder

### build
run `yarn run build` in your shell, then you will get a file `ext.zip`, that's packaged extension

