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
    //
    // d3.select("#robotThreeGroup").transition()
    //     .duration(500)
    //     .attr("transform", "scale(.3)translate(400, 0)")
    //     .ease("linear");

}


dispatch.on("drummer.drummerListener", function(d) {
    d3.select("#cymbal").transition()
        .attr("cx", 600)
        .attr("cy", 480)
        .attr("rx", 160 )
        .attr("ry", 30 )
        .attr("transform", "rotate(-10)");


    var rightDrumStickShiftData = [{
        "x": 575,
        "y": 425
    }, {
        "x": 410,
        "y": 440
    }];

    d3.select("#rightDrumStick").transition()
        .attr("d", lineDataAccessor(rightDrumStickShiftData))
        .delay(100)
        .duration(50)

    var leftDrumStickShiftData = [{
        "x": 280,
        "y": 390
    }, {
        "x": 430,
        "y": 430
    }];

    d3.select("#leftDrumStick").transition()
        .attr("d", lineDataAccessor(leftDrumStickShiftData))
        .duration(150)
});
