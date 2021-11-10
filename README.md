# Browser extension boilerplate
Base on [Parcel](https://parceljs.org/recipes/web-extension/), an magic bundler that support all technology you familiar with(react/vue/typescript, etc), supports the standard [Web Extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) APIs, for chrome that's [Manifest V2](https://developer.chrome.com/docs/extensions/mv2/getstarted/).

## Features
1. dev mode, autorefresh when developing, without concern about [CSP](https://developer.chrome.com/extensions/contentSecurityPolicy)
2. build script, auto pack your extension
3. [scss](http://sass-lang.com/), [less](http://lesscss.org/), vueI18n(https://kazupon.github.io/vue-i18n/old/)(localized your app with vue instead of chrome.i18n.getMessage) integrated
4. CI [travis](https://docs.travis-ci.com/) integrated

## How to use
Just clone this repo to your own project:

```sh
# if you have vue-cli installed, just ignore this command
npm i -g vue-cli
vue init evecalm/extension-boilerplate my-extension
```

then follow the following building steps

## Building Steps

### install deps
run `yarn` in your shell, 

### dev
run `yarn run dev` in your shell

then open chrome and navigate to `chrome://extensions/`, click **Load unpacked extension...** and select `dist` folder

### build
run `yarn run build` in your shell, then you will get a file `ext.zip`, that's packaged extension

### CI configurations
If you project is hosted on github, follow these steps:

1. navigate to repo home page on [github](http://github.com)
2. click `Settings` -> `Integrations & services`
3. click `Add service` -> search `Travis CI` -> re-enter your passcode of github
4. navigate to [Travis CI](https://travis-ci.org/profile) then sigin with github -> authorize Travis make sure it can access your extension repo
5. on page https://travis-ci.org/profile/<your-user-name>, find your repo, turn on the switch, you can click the gear icon for more settings.


