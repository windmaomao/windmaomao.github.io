# QPlot Github

## App Navigation, `appnav`

```json
{
  "name": "github-appnav",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --aot --port 4401",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^5.2.0",
    "@angular/common": "^5.2.0",
    "@angular/compiler": "^5.2.0",
    "@angular/core": "^5.2.0",
    "@angular/forms": "^5.2.0",
    "@angular/http": "^5.2.0",
    "@angular/platform-browser": "^5.2.0",
    "@angular/platform-browser-dynamic": "^5.2.0",
    "@angular/router": "^5.2.0",
    "@ngrx/effects": "^5.2.0",
    "@ngrx/store": "^5.2.0",
    "@ngrx/store-devtools": "^5.2.0",
    "core-js": "^2.4.1",
    "redux-actions": "^2.4.0",
    "rxjs": "^5.5.6",
    "zone.js": "^0.8.19"
  },
  "devDependencies": {
    "@angular/cli": "~1.7.0",
    "@angular/compiler-cli": "^5.2.0",
    "@angular/language-service": "^5.2.0",
    "@types/jasmine": "~2.8.3",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~2.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~4.1.0",
    "tslint": "~5.9.1",
    "typescript": "~2.5.3"
  }
}

```

## Knowledgebase, `kb`

```json
{
  "name": "app2",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "Fang Jin <windmaomao@gmail.com>",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  },
  "dependencies": {
    "lory.js": "^2.4.1",
    "markdown-it": "^8.4.0",
    "markdown-it-abbr": "^1.0.4",
    "markdown-it-anchor": "^4.0.0",
    "markdown-it-attrs": "^1.2.1",
    "markdown-it-container": "^2.0.0",
    "markdown-it-deflist": "^2.0.3",
    "markdown-it-emoji": "^1.4.0",
    "markdown-it-figure-caption": "^0.1.0",
    "markdown-it-footnote": "^3.0.1",
    "markdown-it-for-inline": "^0.1.1",
    "markdown-it-mark": "^2.0.0",
    "markdown-it-named-headers": "0.0.4",
    "markdown-it-toc-and-anchor": "^4.1.2",
    "rxjs": "^6.2.0",
    "rxjs-compat": "^6.2.0",
    "vue": "^2.5.2",
    "vue-click-outside": "^1.0.7",
    "vue-headful": "^1.0.0",
    "vue-resource": "^1.3.5",
    "vue-rx": "^6.0.0",
    "vue2-filters": "^0.3.0",
    "vue2-toast": "^1.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "node-sass": "^4.7.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "sass-loader": "^6.0.6",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

```