# Mc Common 2
Based on Angular 5 {.subtitle}

## App

```json
{
  "name": "angular2-mc-common",
  "version": "1.3.2",
  "description": "Global Console Demo and Core for Angular 5",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --aot",
    "build": "ng build --prod",
    "build-agency": "ng build --prod --base-href=/securityLendingUI/",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e -s false",
    "e2e:watch": "watch \"ng e2e -s false\" src e2e --wait=1"
  },
  "private": true,
  "dependencies": {
    "@angular-devkit/core": "^0.4.8",
    "@angular/animations": "^5.0.0",
    "@angular/common": "^5.0.0",
    "@angular/compiler": "^5.0.0",
    "@angular/core": "^5.0.0",
    "@angular/forms": "^5.0.0",
    "@angular/http": "^5.0.0",
    "@angular/platform-browser": "^5.0.0",
    "@angular/platform-browser-dynamic": "^5.0.0",
    "@angular/router": "^5.0.0",
    "ag-grid": "^15.0.0",
    "ag-grid-angular": "^15.0.0",
    "ag-grid-enterprise": "^15.0.0",
    "angular-calendar": "^0.23.3",
    "angular2-highcharts": "^0.5.5",
    "angular2-moment": "^1.7.1",
    "core-js": "^2.4.1",
    "d3-ng2-service": "^2.1.0",
    "date-fns": "^1.29.0",
    "mydatepicker": "2.1.0",
    "mydaterangepicker": "4.1.11",
    "ng-sidebar": "^6.0.5",
    "ng2-dnd": "^5.0.2",
    "ng2-scroll-to": "^1.0.7",
    "ngx-md": "^3.1.0",
    "ngx-modialog": "^5.0.0",
    "rxjs": "^5.5.2",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.6.3",
    "@angular/compiler-cli": "^5.0.0",
    "@angular/language-service": "^5.0.0",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.6.2",
    "jasmine-spec-reporter": "~4.1.0",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.1.1",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
    "tslint": "~5.7.0",
    "typescript": "~2.4.2"
  }
}
```

## Core

```json
{
  "name": "com.db.ce.ngx-gc",
  "version": "0.9.8",
  "description": "Global Console for Angular5",
  "main": "./index.js",
  "scripts": {
    "build": "rimraf lib && ngc && cp -r scss/ lib/ && cp package.lib.json lib/package.json && cp ../README.md lib"
  },
  "keywords": ["Angular", "Global Console"],
  "author": "Fang-A Jin",
  "license": "MIT",
  "dependencies": {
    "angular-resizable-element": "^2.0.0",
    "angular2-moment": "^1.7.0",
    "mydatepicker": "2.1.0",
    "mydaterangepicker": "4.1.11",
    "ng-sidebar": "^6.0.4",
    "ngx-modialog": "^5.0.0"
  },
  "peerDependencies": {
    "@angular/animations": "^5.0.0",
    "@angular/common": "^5.0.0",
    "@angular/core": "^5.0.0"
  },
  "devDependencies": {
    "@angular/compiler-cli": "^5.0.0",
    "rimraf": "^2.6.2"
  }
}
```