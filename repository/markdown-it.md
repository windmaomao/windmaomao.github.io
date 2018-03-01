# Markdown It

For API documentation, please visit [here](https://markdown-it.github.io/markdown-it)


## Parse

Parsing any string triggers the creation of a `state` variable, `process` function goes through all registered `rules` and apply each `rule` to the `state`.

```javascript
  var state = new this.core.State(src, this, env);
  this.core.process(state);
```  

### Parser

Each parser initializes the `state` by setting some initial attributes for later use. 

#### Core

```javascript
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}
```

#### Block

```javascript
  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters 
  this.sCount = [];  // indents for each line (tabs expanded)
  this.bsCount = [];
  this.blkIndent  = 0; // required block content indent
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
  this.parentType = 'root';
  this.level = 0;  
```

### Tokenize

For `block` parser, it'll go through lines via command and conquer way `[line, endLine]`, and try rules to this section until first rule gets it. **So only one rule can apply to one chunk of `src`.**

On success of the `rule`, it'll proceed `state.line` to next one and at the same time appends more into `state.tokens`.

```javascript
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }
```

### Rules
When it tries to go through each `rule`,  it changes the `state` variable. And it can also ask another `parser` for parsing additional rules. So this is a chain action between `rule` and `parser`.

```javascript
var _rules = [
  [ 'normalize', ... ],
  [ 'block', ... ],
  ...
];
```

#### Core: `normalize`  Rule

`normalize` rule clean the `src` code of the `state`.

#### Core: `block` Rule

use `block` parser to parse the `state`.

#### Block: `hr` Rule

```javascript
  state.line = startLine +  1;
  
  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
```

#### Block: `heading` Rule

```javascript
  state.line = startLine + 1;
  
  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);
```

#### Block: `code` Rule

```javascript
  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
  token.map     = [ startLine, state.line ];
```

#### Block: `fence` Rule

```javascript
  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];
```

#### Block: `paragraph` Rule

```javascript
  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;
```

## Renderer

When you call `render`, it'll parse the string and then render each  `token` type.

```javascript
  var rules = this.rules;
  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;
    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }
```


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

- `attrs`, attributes array
 - `map`, source map info, `[ line_begin, line_end ]` 
 - `markup`, fence string for fence, `* or _`
 - `content`, contends of this tag

Here are some maps of token supported in the system.

### Attrs

In order to add a class to the token, you can do 

```javascript
  token.attrPush([ 'class', name]);
```

Or to get the `html` version of it, 

```javascript
  self.renderAttrs(token.attrs)
```

