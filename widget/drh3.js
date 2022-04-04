const body = document.querySelector('body');
const footer = document.createDocumentFragment();
const a = document.createElement('a');
a.textContent = 'Designing React Hooks Right Way';
a.href =
  'https://www.amazon.com/Designing-React-Hooks-Right-Way-ebook-dp-B09LYZMN16/dp/B09LYZMN16/ref=mt_other?_encoding=UTF8&me=&qid=';
a.target = '_blank';
a.style.position = 'absolute';
a.style.bottom = '0';
a.style.right = '0';
a.style.padding = '0.5em 1em';
a.style.fontStyle = 'italic';
a.style.textDecoration = 'none';
footer.appendChild(a);
body.appendChild(footer);
