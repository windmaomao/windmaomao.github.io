# Markdown It

For API documentation, please visit [here](https://markdown-it.github.io/markdown-it)

## State

```javascript
  token = state.push("sup_open", "sup", 1)
  token.markup = "^"
```

Each major rule comes with its own state machine which manages adding `tokens` to the `stream` for processing. For instance, for block parser rules, the `StateBlock` defines 

```javascript
  StateBlock.prototype.push = function (type, tag, nesting) {
    var token = new Token(type, tag, nesting);
    token.block = true;
    this.tokens.push(token);
    return token;
  }
```

The method `push` takes three parameters

- `type`, the token id, ex. 'heading_open',
- `tag`, the html tag
- `nesting`, move to next or previous level, ex. -1,0,1

## Token

A tag with properties representing a state in the stream. Common properties include,

 - `map`, source map info, `[ line_begin, line_end ]` 
 - `markup`, fence string for fence, `* or _`
 - `content`, contends of this tag

Here are some maps of token supported in the system.

- block
  - code
    - `'code_block', 'code', 0` 
  - heading
    - `'heading_open' , 'h1', 1`
    - `'inline', '', 0`
    - `'heading_close', 'h1', -1`
  - list
    - `'order_list_open', 'ol', 1`
    - `'bullet_list_open', 'ul', 1`
    - `'list_item_open', 'li', 1`
    - `'list_item_close', 'li', -1`
    - `'order_list_close', 'ol', -1`
    - `'bullet_list_close', 'ul', -1`
    - 





