// third party
import Anchor from './markdown-it-anchor';
import Figure from './markdown-it-figure-caption';

export default class MarkdownService {
  md = null;
  anchors = [];
  title = '';
  constructor() {
    this.md = require('markdown-it')({
      html: true,
      linkify: true,
    });
    // {.subtitle}
    this.md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'));
    // :+1:
    this.md.use(require('markdown-it-emoji'));
    // title & toc
    this.md.use(Anchor, { callback: this.parseHeading });
    // : - property list
    this.md.use(require('markdown-it-deflist'));
    // [^1]
    this.md.use(require('markdown-it-footnote'));
    //
    this.md.use(Figure);
    // ==
    this.md.use(require('markdown-it-mark'));
  }

  parseHeading = (token, values) => {
    const lvl = {
      tag: token.tag,
      title: values.title,
      anchor: values.slug
    };
    this.anchors.push(lvl);
  }

  reset() {
    this.anchors = [];
    this.title = '';
  }

  render(source) {
    this.reset();
    const html = this.md.render(source);
    if (this.anchors.length) {
      this.title = this.anchors[0].title;
    }
    return html;
  }
}

const mdService = new MarkdownService();
  
export {
  mdService
};