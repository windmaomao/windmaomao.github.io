// Markdown core and highlighter

export default class MarkdownService {
  md = null;
  anchors = [];
  constructor() {
    this.md = require('markdown-it')({
      html: true,
      linkify: true,
    });
    this.md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'));
    this.md.use(require('markdown-it-emoji'));
    this.md.use(require('markdown-it-anchor'), { callback: this.parseHeading });
  }

  parseHeading = (token, values) => {
    const lvl = {
      tag: token.tag,
      title: values.title,
      anchor: values.slug
    };
    this.anchors.push(lvl);
  }

  render(source) {
    this.anchors = [];
    const html = this.md.render(source);
    return html;
  }
}

const mdService = new MarkdownService();
  
export {
  mdService
};