// Markdown core and highlighter
const md = require('markdown-it')({
  html: true,
  linkify: true,
});
md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'));
md.use(require('markdown-it-emoji'));

export default class MarkdownService {
  render(source) {
    return md.render(source);
  }
}

const mdService = new MarkdownService();
  
export {
  md,
  mdService
};