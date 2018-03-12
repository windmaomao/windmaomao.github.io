# QP KB

## Contribute

All files are in `markdown` format and can be checked in directly.

- Write an article in [Stackedit](https://stackedit.io/app)
- Sync it to [Github](https://github.com/windmaomao/windmaomao.github.io) folder
- Update new menu entry to `menus.json` under `/static/json`
- Check [Online](https://windmaomao.github.io)

`markdown` format is easy to learn. Currently it supports

- GFM markdown [doc](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Footnote [doc](https://github.com/markdown-it/markdown-it-footnote)
- Definition list [doc](https://github.com/markdown-it/markdown-it-deflist)
- Abbreviation [doc](https://github.com/markdown-it/markdown-it-abbr)
- Emoji [doc](https://gist.github.com/rxaviers/7360908)
- Container, abstract [doc](https://github.com/markdown-it/markdown-it-container)
- Mark [doc](https://github.com/markdown-it/markdown-it-mark)
- Image resize [doc](https://github.com/tatsy/markdown-it-imsize)

## Develop

This is build via Vue.js 2.x, to develop

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Deploy

After you build.

- Copy dist folder to root folder
- Push to github
- (Automatic) github -> git pages
- (Automatic) github -> netlifty
- Visit [Online](https://windmaomao.github.io)

## Debug

In order to debug locally, you can set

```javascript
  debug: true
```

and then you need to host the `md` server locally by

```bash
  lite-server .
```

