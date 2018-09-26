module.exports = function markdownItFigureCaption(md, config) {
  md.renderer.rules.image = function(tokens, idx, options, env, self) {
    config = config || {};

    let token = tokens[idx];
    let srcIndex = token.attrIndex('src');
    let url = token.attrs[srcIndex][1];
    let caption = token.content;

    let target = generateTargetAttribute(config.target);
    let linkClass = generateClass(config.linkClass);
    let imgClass = generateClass(config.imgClass);

    return `
      <figure>
        <img src="${url}" alt="${caption}" />
        <figcaption>${caption}</figcaption>
      </figure>
    `;
  };
};

function generateClass (className) {
  if (!className) return '';

  return ' class="' + className + '"';
}

function generateTargetAttribute (target) {
  target = target || '_self';

  return ' target="' + target + '"';
}
