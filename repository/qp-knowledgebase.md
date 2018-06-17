
# QP KB
Aka. `Github` {.subtitle}

## Contribute

All files are in `markdown` format and can be checked in directly. 

- Write an article in [Stackedit](https://stackedit.io/app) 
- Sync it to [Github](https://github.com/windmaomao/windmaomao.github.io) folder
- Update new menu entry to `menus.json` under `/static/json`
- Check [Online](https://windmaomao.github.io)

`markdown` format is easy to learn. Currently it supports

- GFM markdown with highlight [doc](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Emoji, add smiley face [doc](https://gist.github.com/rxaviers/7360908)
- Container, add abstract section [doc](https://github.com/markdown-it/markdown-it-container)
- Anchor, turn header into link [doc](https://github.com/valeriangalliat/markdown-it-anchor)
- Footnote, add annotation footer [doc](https://github.com/markdown-it/markdown-it-footnote)
- Checkbox, add tasklist checkbox [doc](https://github.com/mcecot/markdown-it-checkbox)
- Abbreviation, support abbr keyword [doc](https://github.com/markdown-it/markdown-it-abbr)
- Definition list, support def notation [doc](https://github.com/markdown-it/markdown-it-deflist)
- Mark, add pen highlight style [doc](https://github.com/markdown-it/markdown-it-mark)

- Decorate [doc](https://github.com/rstacruz/markdown-it-decorate)
- Attrs [doc](https://github.com/arve0/markdown-it-attrs)
- Image resize [doc](https://github.com/tatsy/markdown-it-imsize)
- Front matter [doc](https://github.com/craigdmckenna/markdown-it-front-matter)

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


