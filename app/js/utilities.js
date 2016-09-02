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
