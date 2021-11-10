# Browser extension boilerplate
Base on [Parcel](https://parceljs.org/recipes/web-extension/), an magic bundler that supports all technologies you familiar with(react/vue/typescript/less/scss, etc), supports the standard [Web Extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) APIs, for chrome that's [Manifest V2](https://developer.chrome.com/docs/extensions/mv2/getstarted/).

## Features
1. dev mode, autorefresh when developing, without concern about [CSP](https://developer.chrome.com/extensions/contentSecurityPolicy)
2. build script, auto pack your extension
3. [scss](http://sass-lang.com/), [less](http://lesscss.org/), vueI18n(https://kazupon.github.io/vue-i18n/old/)(localized your app with vue instead of chrome.i18n.getMessage) integrated
4. CI [github actions](https://docs.github.com/en/actions) integrated, you can download artifact in when workflow done


## Building Steps

### install deps
run `yarn` in your shell

### dev
1. run `yarn dev` in your shell
2. Open the Extension Management page by navigating to `chrome://extensions`
3. Enable Developer Mode by clicking the toggle switch next to **Developer mode**
4. Click the **LOAD UNPACKED** button and select the select `dist` directory

Above are steps for chrome, if you're a firefox user, you must can figure it out yourself😄

### build
run `yarn build` in your shell, then you will get a file `ext.zip`, that's packaged extension

## references
* [parcel for web extension](https://parceljs.org/recipes/web-extension/)
* [Web Extension via MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [Chrome extension, Manifest V2](https://developer.chrome.com/docs/extensions/mv2/getstarted/).
