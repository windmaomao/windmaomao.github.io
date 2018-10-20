# KB2

Knowledgebase Mobile{.subtitle}

## Services

### constant

- `defaultArticleId`
- `localStorageAppKey`
- `storedKeys`
- `appTitle`
- `footerCreditMsg`

### ApiService

- `getArticle(id)`
- `getMenu()`
- `getApps()`

### MarkdownService

- **imports**

  - `markdown-it`
  - `markdown-it-attrs`
    `{.class}`
  - `markdown-it-emoj`
    `:+1:`
  - `markdown-it-anchor`
    title & toc
  - `markdown-it-deflist`
    `: - property`
  - `markdown-it-footnote`
    `[^1]`
  - `markdown-it-figure-caption`
    figure & caption
  - `markdown-it-mark`
    `==`
- `title`
- `anchors`
- `render(source)`

### AppStore

App state via `mobx`

- `status`
  - `loading`
    controls API spinner status
  - `activity`
    controls minor site activity status
  - `message`
- `menu`
- `article`
  - `id`
  - `html`
  - `title`
  - `anchors`
  - `level`
    Toggle Level
- `ui`
  - `sidenavOn`
  - `appnavOn`
  - `tocOn`
- `apps`
- `appId`
- `fetchMenu()`
- `fetchArticle(id)`
- `fetchApps()`
- `toggleSidenav()`
- `toggleAppnav()`
- `toggleToc()`
- `toggleLevel(level)`

## Components

### index

App bootstrapping

- App
- AppStore

### App

- `app`
  App store
- Spinner
  - `loading`
    status.loading
  - DotLoader
    via `react-spinners`
- Appnav
  - `apps`
    apps
  - `appId`
    appId
  - `toggled`
    ui.appnavOn
  - `onClose`
    toggleAppnav()
- Navbar
  - `title`
    article.title
  - `onTocToggle`
    toggleToc()
  - `onAppnavToggle`
    toggleAppnav()
- Toc
  - `toggled`
    ui.tocOn
  - `anchors`
    article.anchors
  - `onClose`
    toggleToc
- ArticleActions
  - `article`
    app.article
  - `toggleLevel`
    app.toggleLevel()
  - a
    - `onClick=downloadData`
      via `js-file-download`
  - a
    - `onClick=toggleLevel(1)`
  - a
    - `onClick=toggleLevel(2)`
- Bredcrumb
  - `article`
    app.article
  - `toggleSidenav`
    app.toggleSidenav()
- Article
  - `article`
    article
  - `toc`
    toc
  - `onSidenavToggle`
    toggleSidenav()
  - `dangerouslySetInnerHTML` 
    `__html=article.html`
- Sidenav
  - `toggled`
    ui.sidenavOn
  - `onToggle`
    toggleSidenav()
  - `menu`
    menu
  - `selected`
    article.id
  - `onSelect`
    fetchArticle()
- Credit
  - `message`
    footerCreditMsg