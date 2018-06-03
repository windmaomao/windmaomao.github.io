# Angular WADK

![Global Console with WADK](https://mydb.intranet.db.com/servlet/JiveServlet/downloadImage/38-84374-696834/mc-common-adk.PNG)

## What is it?

|           | Framework      | Type      | Version |  Source      | Build        |
|-----------| ---------------|-----------|---------|--------------|--------------|
| **_Is_**  | Global Console | Core      | 4.0     | `src/core`   | `core`       |
| **_Is_**  | Global Console | Style     | 4.0     | `src/styles` | `core/gc.css`|
| **_Is_**  | Global Console | Demo App  | 4.0     | `src/app`    | `dist`       |
| **_Is_**  | Angular        | Module    | 5.0+    | `src`            |          |
| _Has_     | Autobahn WADK  | Spec      | 2.0     | `src/wadk-core`  |          |

Common *CSS* stylesheet and *Angular* components used for *Global Console* apps. 

This is written in new angular typescript and uses latest *Autobahn ADK* theme as the foundation. 

Originated from the success of *Angular* 1.x and *Autobahn ADK*, the idea is to share reusable common elements so that they can be plugged into web applications across different business lines with only couple lines of code. 


## Develop Library

To install 

```
  npm install
```

To build the library

```
  npm run lib
```

## Develop Demo App

To run the demo app

```
  npm start
```

To build the demo app

```
  npm run build
```
