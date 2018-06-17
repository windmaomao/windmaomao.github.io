# ReportsCenterUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0. It heavily depends on [`Global Console`](https://github.com/angular/angular-cli) as the base library to speed up the development.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. This also starts up the mock server `http://localhost:3001/`. 

In case, it is better to separate the logs for both server you can run them separately on a different console by running `npm run dev` and `npm run mock`.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

There are two ways to run the end-to-end tests since the application is dependent on having the API end points activated. Otherwise the application will be stuck on the entitlements error page. Before running any of the commands below make sure you have setup your environment to run protractor. See Installing Protractor section for more info.

### Purely running test
You would use this if you are just purely checking the state of the application

Run `npm run e2e-with-mock` 

If mock server is already running or in the future if the app is directly connected to non-mock data servers

Run `npm run e2e` 

### Developing while running end-to-end
In case it is assumed that you are running the mock server on the side (either ```npm start``` or ```npm run mock```) . This means that you don't need to run the mock server  for the application to work. You can just run the end-to-end test at this point.

Run `npm run e2e-dev` 

This opens a new target browser while running test against your dev server.

## Installing Protractor

1)	Download nodeJS from MC7

2)	In case node does not resolve to your environment (usually this is automatic once you installed nodeJS from MC7), append nodeJS to your PATH system environment variable by running the following command in command line

```set PATH=%PATH%;C:\Program Files\nodejs\```

To break it down: 

```set PATH=%PATH%;``` takes the current path and sets PATH to it

```C:\Program Files\nodejs\``` adds this directory to the path

3)	Add the following lines to the ```.npmrc``` file in your ```C:\Users\<your_username>``` directory
Note: Skip this step if you are using Artifactory as your NPM repository

```proxy = http://surf-proxy.intranet.db.com:8080
https-proxy = http://surf-proxy.intranet.db.com:8080
```

4)	Run the following commands

```npm –-version (to check NodeJS version)```

```npm install –g protractor``` (This will install two command line tools, protractor and webdriver-manager.)

5)	Append npm to your PATH environment variable  by running the following command. Skip this step if npm has resolved to your environment
set ```PATH=%PATH%;C:\Users\<your_username>\AppData\Roaming\npm```

6)	Run the following command

```protractor --version``` (to check protractor version)

7)	Run the following command to download necessary binaries

```webdriver-manager update --proxy="http://surf-proxy.intranet.db.com:8080" --ignore_ssl```

In case you need IE drivers or to test on IE browser,

```webdriver-manager update --proxy="http://surf-proxy.intranet.db.com:8080" --ignore_ssl --ie```

8)	Run the following command to check the update version jar files available after update command.

```webdriver-manager status```

9)	Run the following commands to update and start the Selenium server

```
webdriver-manager start
webdriver-manager update
webdriver-manager start
```

IE issues when running protractor:
To configure IE, It needs to set same Security level in all zones. To do that follow the steps below:

1.Open IE

2.Go to Tools -> Internet Options -> Security

3.Set all zones (Internet, Local intranet, Trusted sites, Restricted sites) to the same protected mode, enabled or disabled should not matter.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
