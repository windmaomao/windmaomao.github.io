# Data Visulaization with D3 Cookbook

## Getting Started with D3
## Be Selective
## Dealing with Data
## Tipping the Scales
## Playing with Axes
## Transition with Style
## Getting into Shape
## Chart Them Up
## Lay Them Out {.chapter .9}

The `D3` layout is the focus of this chapter - a concept we have not encountered before. As expected, **D3 layouts are algorithms that calculate and generate placement information for a group of elements.** However, there are a few critical properties worth mentioning before we dive deeper into the specifics:

### Pie chart

A pie chart or a circle graph is a circular graph that contains multiple sectors used to illustrate numerical proportion.

```javascript
  var pie = d3.pie()
    .sort(function(d) { return d.id; })
    .value(function(d) { return d.value; })
  ;

  var slices = _pieG.selectAll('path.arc')
    .data(pie(_data)); // <-B
```

The sort function tells the `pie` layout to sort slices by its ID field, so that we can maintain stable order among slices. Without the sorting, by default, the pie layout will order the slices by value, resulting in the swapping of slices whenever we update the pie chart. The `value` function is used to provide value accessor, which, in our case, returns the value field. When rendering slices, now with the `pie` layout, we directly set the output of the `pie` function call as data (remember, ==layouts are data==) to generate the arc `svg:path` elements (refer to line B).

At this point, you might be wondering what kind of data `d3.pie` generates. Here is what the output data looks like:

```javascript
  [{
    data: Object,
    endAngle: 1.302,
    index: 0,
    padAngle: 0,
    startAngle: 0,
    value: 7.605
  }]
```

As we can see clearly, this is exactly what the `d3.arc` generator expects. This is why we can use this data directly with `d3.arc` without dealing with any detailed calculation for angles and partitions. 

### Stacked area chart

Stacked area chart is a variation of the standard area chart in which different areas are stacked on top of each other giving your audience the ability to compare not only different data series individually but also their relationship to the total in proportion.

### Treemap

Treemaps were introduced by Ben Shneiderman in 1991. A treemap displays hierarchical tree-structured data as a set of recursively subdivided rectangles. In other words, it displays each branch of the tree as a large rectangle, which is then tiled with smaller rectangles representing subbranches. This process continuously repeats itself till it reaches the leaves of the tree.

```javascript
{
  name: 'flare',
  children: [
    {
      name: 'analytics',
      children: [
        { name: 'Agglomerative', size: 3938 },
        { name: 'Agglomerative', size: 3938 },
        { name: 'Agglomerative', size: 3938 },
      ]
    }
  ]
};
```

This is a shortened version of a popular hierarchical dataset used in the D3 community for demonstration purposes. As we can see quite easily, this particular JSON feed is structured as a typical singly-linked rooted tree with each node having a single parent and multiple child nodes stored in the `children` array. This is a pretty common way to organize your hierarchical data in order to be consumed by the D3 hierarchical layouts.

```javascript
  var treemap = d3.treemap()      // <-A
    .size([width, height])
    round(true)
    padding(1);

  var root = d3.hierarchy(nodes)  // <-B
    .sum(valueAccessor)
    .sort(function(a, b) {
      return b.value - a.value;
    });

  treemap(root);                  // <-C 

  var cells = _bodyG.selectAll('g')
    .data(root.leaves());         // <-D
```

The `d3.hierarchy` function was used in this recipe (on line B) to restructure the input data into a format that can be consumed by d3.treemap and other D3 hierarchical data functions.

- `sum(valueAccessor)`, One feature this recipe offers is the ability to switch the treemap value accessor on the fly. Value accessor is used by a d3.hierachy function to access value field on each node.
- `sort(function(a,b))`, We have also instructed `d3.hierarch` to sort each node in the order of their value, effectively making the treemap rrange each block in the order of their size.

To apply the `d3.hierarchy` transformation on Flare JSON datafeed, we simply set the nodes on the `d3.hierarchy` function to the root node in our JSON tree (refer to line B). Then, we store the data after the d3.hierarchy transformation using the variable `root`. Here is how the data now looks like:

```javascript
{
  children: Array,
  data: Object,
  depth: 0,
  height: 4,
  parent: null,
  value: 956129,
  x0: 0,
  x1: 1600,
  y0: 0,
  y1: 800
}
```

As we can see here, after the transformation, each node now has its value calculated based on the sum of all their children's values and also the depth and size computed, as follows:

- depth, the depth of the node
- height: the height of the node in the tree
- value, sum of all sub-tree values
- x0, cell starting x 
- y0, cell starting y
- x1, cell ending x
- y1, cell ending y

On line D, we generate `cells` using only the leaf nodes from the treemap. This is because firstly `d3.selection.data` expects flat data array instead of hierarchical tree. Secondly, the tree map actually only render leaf nodes anyway; **the sub-tree grouping is visualized using color**.

### Tree

When working with hierarchical data structures, a tree (tree graph) is probably one of the most natural and common visualizations typically used to demonstrate structural dependencies between different data elements. Tree is an undirected graph in which any two nodes (vertices) are connected by one and only one simple path.

```javascript
  var root = d3.hierarchy(nodes); // <-A

  var tree = d3.tree()            // <-B
    .size([height, width]);

  tree(root);                     // <-C  
```

We first pass the loaded JSON data to `d3.hierachy` for processing (refer to line A). The d3.tree function will then take care of the rest and calculate every node's position accordingly. To use the tree layout, you simply need to invoke the layout function on line C. If you peek into the `nodes` layout data, it contains node data that will look like this:

```javascript
{
  children: Array,
  data: {
    children: Array,
    name: "flare"
  },
  depth: 0,
  height: 4,
  id: 1,
  parent: null,
  x: 624,
  y: 0
}
```

Tree nodes are rendered in the `renderNode` function as follows:

```javascript
  function renderNodes(root) { 
    var nodes = root.descendants(); 
    var nodeElements = _bodyG.selectAll("g.node") 
      .data(nodes, function (d) { 
        return d.id || (d.id = ++_i); 
      });     

    var nodeEnter = nodeElements.enter().append("g") 
      .attr("class", "node") 
      .attr("transform", function (d) {  // <-F 
        return "translate(" + d.y 
          + "," + d.x + ")"; 
      }) 
      .on("click", function (d) { // <-G 
        toggle(d); 
        render(_root); 
      });       
  }
```

The `root.descendents` function returns all nodes in the hierarchical data. This is different from the root.leaves function we used in the Build a treemaprecipe. The root.leaves function returns only the leaf nodes as a JavaScript array; however, with d3.tree layout, we not only care about the leaves but also any intermediary nodes in order to visualize the entire tree structure, and thus, we need to use `root.descendents` instead.

On line F, we created the nodes and moved them to the coordinates of (`d.y`, `d.x`) that the d3.tree layout has calculated for us. We switched `x` and `y` in this case since by default the `d3.tree` layout calculates coordinates in portrait mode while we want to render them in the landscape mode.

The next important function in this recipe is the renderLinks function. This function draws all the links that connect all the tree nodes we just created:

```javascript
function renderLinks(root) { 
  var nodes = root.descendants().slice(1); 

  var link = _bodyG.selectAll("path.link") 
      .data(nodes, function (d) { 
          return d.id || (d.id = ++_i); 
      }); 

  link.enter().insert("path", "g") // <-M 
      .attr("class", "link") 
    .merge(link) 
    .transition().duration(_duration) 
      .attr("d", function (d) { 
        return generateLinkPath(d, d.parent); // <-N 
      }); 

  link.exit().remove(); 
} 
```

First, for rendering links, we use root.descendants().slice(1) as its data instead of `root.descendants()`. This is because for n nodes there are `n` - 1 links since there is no link pointing to the root node in a tree. Once again, object constancy is used here to make our visualization more stable during re-rendering. Then, on line M, we created path elements to represent each link in our visualization. Now, the interesting part of this function lies in the `generateLinkPath` function on line N.

```javascript
function generateLinkPath(target, source) { 
  var path = d3.path(); 
  path.moveTo(target.y, target.x); 
  path.bezierCurveTo((target.y + source.y) / 2, target.x, 
    (target.y + source.y) / 2, source.x, source.y, source.x); 
  return path.toString(); 
} 
```

In this function, we use the `d3.path` generator to generate a Bezier curve that connects the source and target nodes. You can probably see that the usage of the `d3.path` generator is almost like describing how the line should be drawn. In this case, we moved the starting point of such line to (target.y, target.x) and then draw a Bezier curve with the given control points from target to source.


### Enclosure diagram

An enclosure diagram is an interesting visualization of hierarchical data structures that use the recursive circle packing algorithm. It uses containment (nesting) to represent hierarchy. Circles are created for each leaf node in a data tree, while its size is proportional to a particular quantitative dimension of each data element.


## Interacting with Your Visualization
## Using Force
## Knowing Your Map
## Test Drive Your Visualization




