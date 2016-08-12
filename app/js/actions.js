dispatch.on("speak.speachListener", function(d) {
    var opacity = 0;
    var delay = 150;
    var mouthColor = "red";
    var boltColor = "yellow"
    var robot = "robotOne";
    for (i = 0; i < d.duration; i++) {
        speakVisual(delay, opacity, mouthColor, boltColor, robot);
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

dispatch.on("speakRepeat.speachRepeatListener", function(d) {
    var opacity = 0;
    var delay = 150;
    var mouthColor = "red";
    var boltColor = "yellow";
    var robot = "robotTwo";

    for (i = 0; i < d.duration; i++) {
        speakVisual(delay, opacity, mouthColor, boltColor, robot);
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

function speakVisual(delay, opacity, mouthColor, boltColor, robot) {
    d3.select("#" + robot + "Speaker").transition()
        .delay(delay)
        .duration(500)
        .style("opacity", opacity)
        .attr("fill", mouthColor);

    d3.select("#" + robot + "LeftAntenaBoltLineGraph1").transition()
        .delay(delay)
        .attr("stroke", boltColor);

    d3.select("#" + robot + "LeftAntenaBoltLineGraph2").transition()
        .delay(delay)
        .attr("stroke", boltColor);

    d3.select("#" + robot + "RightAntenaBoltLineGraph1").transition()
        .delay(delay)
        .attr("stroke", boltColor);

    d3.select("#" + robot + "RightAntenaBoltLineGraph2").transition()
        .delay(delay)
        .attr("stroke", boltColor);
}
