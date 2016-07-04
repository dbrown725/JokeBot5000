dispatch.on("iAmJokeBot.leftAntenaCircle", function(d) {
    var opacity = 0;
    var delay = 150;
    var mouthColor = "red";
    var boltColor = "yellow"

    for (i = 0; i < d.duration; i++) {
        speachSegment(delay, opacity, mouthColor, boltColor);
        delay = delay + 150;
        if (opacity === 0) {
            opacity = 1;
        } else {
            opacity = 1;
        }
        if (mouthColor === "red") {
            mouthColor = "yellow";
        } else {
            mouthColor = "red";
        }

        if (boltColor === "white") {
            boltColor = "yellow";
        } else {
            boltColor = "white";
        }
    }
});

function speachSegment(delay, opacity, mouthColor, boltColor) {
    d3.select("#speaker").transition()
        .delay(delay)
        .duration(500)
        .style("opacity", opacity)
        .attr("fill", mouthColor);

    d3.select("#leftAntenaBoltLineGraph1").transition()
        .delay(delay)
        .attr("stroke", boltColor);

    d3.select("#leftAntenaBoltLineGraph2").transition()
        .delay(delay)
        .attr("stroke", boltColor);

    d3.select("#rightAntenaBoltLineGraph1").transition()
        .delay(delay)
        .attr("stroke", boltColor);

    d3.select("#rightAntenaBoltLineGraph2").transition()
        .delay(delay)
        .attr("stroke", boltColor);
}
