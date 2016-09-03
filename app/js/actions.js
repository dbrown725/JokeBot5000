dispatch.on("speak.speachListener", function(d) {
    var opacity = 0;
    var delay = 150;
    var mouthColor = "white";
    var boltColor = "yellow"
    var robot = "robotOne";
    for (i = 0; i < d.duration; i++) {
        speakVisual(delay, opacity, mouthColor, boltColor, robot);
        delay = delay + 150;
        if (mouthColor === "white") {
            mouthColor = "yellow";
        } else {
            mouthColor = "white";
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
    var mouthColor = "white";
    var boltColor = "yellow";
    var robot = "robotTwo";

    for (i = 0; i < d.duration; i++) {
        speakVisual(delay, opacity, mouthColor, boltColor, robot);
        delay = delay + 150;
        if (mouthColor === "white") {
            mouthColor = "yellow";
        } else {
            mouthColor = "white";
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
        .attr("stroke", mouthColor);

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
    // Left drum strike
    leftArmDrumStrike();

    //Right drum strike
    rightArmDrumStrike();

    // Move whole right arm to right
    moveRightArmToRight();

    // Right drum stick hit cymbal
    rightStickStrikeCymbal();

    // Vibrate cymbal
    cymbalVibrate();

    // Move whole right arm back to the left
    returnRightArm();
});

var leftArmDrumStrike = function() {
    var leftDrumStickShiftData = buildLineData(280, 390, 430, 430);
    d3.select("#leftDrumStick").transition()
        .attr("d", lineDataAccessor(leftDrumStickShiftData))
        .duration(150);
    var leftDrumStickShiftBackData = buildLineData(280, 390, 430, 369);
        d3.select("#leftDrumStick").transition()
        .attr("d", lineDataAccessor(leftDrumStickShiftBackData))
        .delay(100)
        .duration(150);
}

var rightArmDrumStrike = function() {
    var rightDrumStickShiftData = buildLineData(575, 425, 410, 440);
    d3.select("#rightDrumStick").transition()
        .attr("d", lineDataAccessor(rightDrumStickShiftData))
        .delay(100)
        .duration(50);
    var rightDrumStickShiftBackData = buildLineData(575, 425, 410, 340);
        d3.select("#rightDrumStick").transition()
        .attr("d", lineDataAccessor(rightDrumStickShiftBackData))
        .delay(200)
        .duration(50);
}

var moveRightArmToRight = function() {
    d3.select("#robotThreeRightArm2").transition().delay(300).duration(50).attr("transform", "translate(40, -20)");
    d3.select("#robotThreeRightArm3").transition().delay(300).duration(50).attr("transform", "translate(40, -20)");
    d3.select("#robotThreeRightArmHand").transition().delay(300).duration(50).attr("transform", "translate(40, -20)");
    d3.select("#robotThreeRightArmHandHide").transition().delay(300).duration(50).attr("transform", "translate(40, -20)");
}

var rightStickStrikeCymbal = function() {
    d3.select("#rightDrumStick").transition().delay(300).duration(25).attr("transform", "translate(60, -20)");
    d3.select("#rightDrumStick").transition().delay(300).duration(25).attr("transform", "translate(60, -20)");
    var rightDrumStickShiftCymbalData = buildLineData(575, 425, 500, 270);
    d3.select("#rightDrumStick").transition().attr("d", lineDataAccessor(rightDrumStickShiftCymbalData)).delay(350).duration(100);
    var rightDrumStickShiftCymbalData2 = buildLineData(575, 425, 500, 350);
    d3.select("#rightDrumStick").transition().attr("d", lineDataAccessor(rightDrumStickShiftCymbalData2)).delay(450).duration(25);
}

var cymbalVibrate = function() {
    var cymbalRyArray = [20, 40, 20, 40, 20, 30, 20, 30, 20, 30, 25, 30, 25,
                        30, 25, 30, 25, 30, 25, 30, 25, 30, 25, 30, 25, 30,
                        25, 30, 25, 30, 25, 30, 25, 30, 25, 30, 25, 30, 25,
                        30, 25, 30, 25, 30];
    var cymbalDelay = 500;
    var cymbalDuration = 25;
    for (var i = 0; i < cymbalRyArray.length; i++) {
        cymbalVibrateCycle(cymbalRyArray[i], cymbalDelay, cymbalDuration);
        cymbalDelay = cymbalDelay + 25;
    }
}

var cymbalVibrateCycle = function(ry, delay, duration) {
    d3.select("#cymbal").transition()
        .attr("ry", ry )
        .delay(delay)
        .duration(duration);
}

var returnRightArm = function() {
    d3.select("#robotThreeRightArm2").transition().delay(475).duration(100).attr("transform", "translate(0, 0)");
    d3.select("#robotThreeRightArm3").transition().delay(475).duration(100).attr("transform", "translate(0, 0)");
    d3.select("#robotThreeRightArmHand").transition().delay(475).duration(100).attr("transform", "translate(0, 0)");
    d3.select("#robotThreeRightArmHandHide").transition().delay(475).duration(100).attr("transform", "translate(0, 0)");
    d3.select("#rightDrumStick").transition().delay(475).duration(100).attr("transform", "translate(0, 0)");
    d3.select("#robotThreeRightArmHandHide").transition().delay(475).duration(100).attr("transform", "translate(0, 0)");
    var rightDrumStickShiftCymbalData3 = buildLineData(575, 425, 410, 340);
    d3.select("#rightDrumStick").transition()
        .attr("d", lineDataAccessor(rightDrumStickShiftCymbalData3))
        .attr("transform", "translate(0, 0)")
        .delay(575)
        .duration(200);
}
