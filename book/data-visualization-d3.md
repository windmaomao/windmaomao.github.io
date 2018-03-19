# Data Visualization with D3 Cookbook

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

### Build a pie chart

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

### Building a tree


## Interacting with Your Visualization
## Using Force
## Knowing Your Map
## Test Drive Your Visualization




