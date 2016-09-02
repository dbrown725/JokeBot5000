// The accessor functions which the path generator uses to produce path data
var lineDataAccessor = d3.svg.line()
    .x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    })
    .interpolate("linear");

/**
* Builds Array containing params x/y line coordinates
* @param {Integer} x coordinate for starting point of line
* @param {Integer} y coordinate for starting point of line
* @param {Integer} x coordinate for ending point of line
* @param {Integer} y coordinate for ending point of line
* @return {Array} point to point line coordinates
*/
var buildLineData = function(x1, y1, x2, y2) {
    return [{
        "x": x1,
        "y": y1
    }, {
        "x": x2,
        "y": y2
    }]
}

/**
* Builds circle element and adds to element passed in
* @param {Element} addToElement element to add the circle to
* @param {Integer} circle center x coordinate
* @param {Integer} circle center y coordinate
* @param {Integer} radius of circle
* @param {String} id for circle
* @param {String} circle fill color
* @param {Integer} circle opacity
* @return {Element} circle
*/
var buildAndAppendCircle = function(addToElement, cx, cy, radius, id, fillColor, opacity) {
    return addToElement.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", radius)
        .attr("id", id)
        .style("fill", fillColor)
        .style("opacity", opacity);
}

/**
* Builds rectangle element and adds to element passed in
* @param {Element} addToElement element to add the rect to
* @param {Integer} rect starting upper left corner x coordinate
* @param {Integer} rect starting upper left corner y coordinate
* @param {Integer} width of rect
* @param {Integer} height of rect
* @param {String} id for rect
* @param {String} rect fill color
* @param {Integer} rect opacity
* @return {Element} rectangle
*/
var buildAndAppendRect = function(addToElement, x, y, width, height, id, fillColor, opacity) {
    return addToElement.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", width)
    .attr("height", height)
    .attr("id", id)
    .style("fill", fillColor)
    .style("opacity", opacity);
}

/**
* Builds path element and adds to element passed in
* @param {Element} addToElement element to add the rect to
* @param {Array} of objects with x and y properties
* @param {String} stroke color
* @param {Integer} stroke width
* @param {String} id
* @param {String} fill color
* @return {Element} path
*/
var buildAndAppendPath = function(addToElement, data, stroke, strokeWidth, id, fillColor) {
    return addToElement.append("path")
    .attr("d", lineDataAccessor(data))
    .attr("stroke", stroke)
    .attr("stroke-width", strokeWidth)
    .attr("id", id)
    .attr("fill", fillColor);
}

/**
* Converts array of x y arrays into array of x y objects
* @param {Array} array of xy arrays
* @return {Array} array of x y data point objects
*/
var buildXYPointObjectArray = function(data) {
    console.log('data', data);
    var xyObjects = [];
    for (var i = 0; i < data.length; i++) {
        xyObjects.push({
            "x": data[i][0],
            "y": data[i][1]
        })
    }
    return xyObjects;
}
