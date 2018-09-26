module.exports = function markdownItFigureCaption(md, config) {
  md.renderer.rules.image = function(tokens, idx, options, env, self) {
    config = config || {};

    let token = tokens[idx];
    let srcIndex = token.attrIndex('src');
    let url = token.attrs[srcIndex][1];
    let caption = token.content;

    return `
      <figure>
        <img src="${url}" alt="${caption}" />
        <figcaption>${caption}</figcaption>
      </figure>
    `;
  };
};
