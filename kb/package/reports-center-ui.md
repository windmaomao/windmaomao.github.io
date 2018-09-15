# Reports Center UI

```json
{
  "name": "reports-center-ui",
  "version": "2.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "dev": "ng lint && ng serve --aot --environment=dev --i18nFile=src/locale/messages.en.xlf --i18nFormat=xlf --locale=en",
    "build": "ng lint && ng build --prod --i18nFile=src/locale/messages.en.xlf --i18nFormat=xlf --locale=en --base-href=/reportsCenterUI/",
    "build-with-sourceCode": "ng lint && ng build --sourcemap --aot --i18nFile=src/locale/messages.en.xlf --i18nFormat=xlf --locale=en --base-href=/reportsCenterUI/",
    "tsc-build": "./node_modules/.bin/tsc -p \"./e2e/tsconfig.e2e.json\"",
    "test": "ng test",
    "lint": "ng lint",
    "auto-test": "npm run tsc-build && protractor e2e/out-tsc/config/protractor.conf.js",
    "e2e": "ng e2e --no-webdriver-update",
    "e2e-with-mock": "concurrently --kill-others \"npm run e2e\" \"npm run mock\"",
    "e2e-dev": "protractor protractor.conf.js",
    "wm-update": "webdriver-manager update --proxy=\"http://surf-proxy.intranet.db.com:8080\" --ignore_ssl",
    "wm-start": "webdriver-manager start",
    "mock": "node ./mock/server.js",
    "start": "concurrently --kill-others \"npm run dev\" \"npm run mock\""
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
    "@ngrx/store": "^5.2.0",
    "@ngrx/store-devtools": "^5.2.0",
    "@ngui/auto-complete": "^1.0.2",
    "ag-grid": "^17.1.0",
    "ag-grid-angular": "^17.1.0",
    "ag-grid-enterprise": "^17.1.0",
    "angular-resizable-element": "^2.0.0",
    "angular-webstorage-service": "^1.0.2",
    "angular2-highcharts": "^0.5.5",
    "com.db.ce.ngx-gc": "^0.9.8",
    "concurrently": "^3.5.1",
    "core-js": "^2.4.1",
    "json-server": "^0.12.1",
    "lodash": "^4.17.10",
    "moment": "^2.22.1",
    "ngx-logger": "^3.0.0-rc1",
    "ngx-toastr": "^8.4.0",
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
    "@types/cucumber": "^2.0.4",
    "@types/selenium-webdriver": "^3.0.7",
    "@types/fs-extra": "4.0.0",
    "codelyzer": "^4.0.1",
    "chai": "^4.0.2",
    "chai-as-promised": "^7.0.0",
    "cucumber": "^4.2.1",
    "cucumber-html-reporter": "^4.0.3",
    "fs-extra": "4.0.0",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "jsonfile": "3.0.1",
    "karma": "~2.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "multiple-cucumber-html-reporter": "^0.2.0",
    "protractor": "~5.1.2",
    "protractor-cucumber-framework": "^5.0.0",
    "ts-node": "~4.1.0",
    "tslint": "~5.9.1",
    "typescript": "2.5.2"
  }
}
```