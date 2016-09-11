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

var eyeBlink = function(robotName, headColor) {
    var delay = 3000;
    for (var i=0; i < 40; i++) {
        eyeBlinkCycle(robotName, delay, headColor);
        delay = delay + Math.floor((Math.random() * 20000));
    }
}

var eyeBlinkCycle = function(robotName, delay, headColor) {
    d3.select("#" + robotName + "GroupHead").append("path")
        .attr("d", getUpperArc())
        .attr("transform", "translate(560,265)")
        .style("fill", headColor)
        .transition().delay(delay).duration(250).attr("transform", "translate(560,282)")
        .transition().delay(delay + 250).duration(250).attr("transform", "translate(560,265)");

    d3.select("#" + robotName + "GroupHead").append("path")
        .attr("d", getLowerArc())
        .attr("transform", "translate(560,165)")
        .style("fill", headColor)
        .transition().delay(delay).duration(250).attr("transform", "translate(560,140)")
        .transition().delay(delay + 250).duration(250).attr("transform", "translate(560,165)");

    d3.select("#" + robotName + "GroupHead").append("path")
        .attr("d", getUpperArc())
        .attr("transform", "translate(440,265)")
        .style("fill", headColor)
        .transition().delay(delay).duration(250).attr("transform", "translate(440,282)")
        .transition().delay(delay + 250).duration(250).attr("transform", "translate(440,265)");

    d3.select("#" + robotName + "GroupHead").append("path")
        .attr("d", getLowerArc())
        .attr("transform", "translate(440,165)")
        .style("fill", headColor)
        .transition().delay(delay).duration(250).attr("transform", "translate(440,140)")
        .transition().delay(delay + 250).duration(250).attr("transform", "translate(440,165)");
}

var getUpperArc = function() {
    var pi = Math.PI;
    return d3.svg.arc()
        .innerRadius(70)
        .outerRadius(87)
        .startAngle(20 * (pi/180)) //converting from degs to radians
        .endAngle(-20 * (pi/180));
}

var getLowerArc = function() {
    var pi = Math.PI;
    return d3.svg.arc()
        .innerRadius(70)
        .outerRadius(100)
        .startAngle(160 * (pi/180)) //converting from degs to radians
        .endAngle(200 * (pi/180));
}

var initEyeBlink = function() {
    eyeBlink("robotOne", "#cce6ff");
    eyeBlink("robotTwo", "#ffcce6");
    eyeBlink("robotThree", "#ccffe5");
}

var weatherRobotShift = function() {
    d3.select("#robotThreeGroup").transition().delay(500).duration(2000).attr("transform", "scale(.35)translate(-900,800)");
    d3.select("#robotThreeGroup").transition().delay(15000).duration(2000).attr("transform", "scale(.35)translate(100, 125)");
    d3.select("#robotOneGroup").transition().delay(500).duration(2000).attr("transform", "translate(-900,800)");
    d3.select("#robotOneGroup").transition().delay(15000).duration(2000).attr("transform", "translate(150, 75)");
    d3.select("#robotTwoGroup").transition().delay(1000).duration(2000).attr("transform", "translate(-100,30)");
    d3.select("#robotTwoGroup").transition().delay(15000).duration(2000).attr("transform", "scale(.5)translate(1620, 125)");
    d3.select("#weatherLogo").transition().delay(1500).duration(2000).attr("opacity", "1");
    d3.select("#weatherLogo").transition().delay(14000).duration(2000).attr("opacity", "0");
    d3.select("#weatherLogoIntro").transition().delay(1500).duration(2000).attr("opacity", "1");
    d3.select("#weatherLogoIntro").transition().delay(14000).duration(2000).attr("opacity", "0");
    var temperature = currentConditions.current_observation.temperature_string;
    var currentConditionsIcon = currentConditions.current_observation.icon_url;
    d3.select("#currentTemperature").transition().delay(1500).duration(2000).text(temperature).attr("opacity", 1);
    d3.select("#currentTemperature").transition().delay(14000).duration(2000).attr("opacity", 0);
    d3.select("#currentWeatherIcon").transition().delay(1500).duration(2000).attr("xlink:href", currentConditionsIcon).attr("opacity", "1");
    d3.select("#currentWeatherIcon").transition().delay(14000).duration(2000).attr("opacity", "0");
}
