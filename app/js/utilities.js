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
* @param {String} x coordinate for starting point of line
* @param {String} y coordinate for starting point of line
* @param {String} x coordinate for ending point of line
* @param {String} y coordinate for ending point of line
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
* @param {String} circle opacity
*/
var buildAndAppendCircle = function(addToElement, cx, cy, radius, id, fillColor, opacity) {
    addToElement.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", radius)
        .attr("id", id)
        .style("fill", fillColor)
        .style("opacity", opacity);
}
