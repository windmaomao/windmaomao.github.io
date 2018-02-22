# Markdown It

For API documentation, please visit [here](https://markdown-it.github.io/markdown-it)

## State

```javascript
  token = state.push("sup_open", "sup", 1)
  token.markup = "^"
```

Each major rule comes with its own state machine which manages adding tokens to the stream for future processing. For instance, for block parser rules, the `StateBlock` defines 

```javascript
  StateBlock.prototype.push = function (type, tag, nesting) {
    var token = new Token(type, tag, nesting);
    token.block = true;
    this.tokens.push(token);
    return token;
  }
```



