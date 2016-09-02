
function loadRobotOne() {

    var robotOneGroup = svgContainer.append("g");

    var robotOneGroupBody = robotOneGroup.append("g");

    var robotOneGroupHead = robotOneGroup.append("g").attr("id", "robotOneGroupHead");

    var robotOneGroupStartX = 150;

    var robotOneGroupStartY = 75;

    /**
    * For robot one builds Array containing params x/y line coordinates
    * @param {String} x coordinate for starting point of line
    * @param {String} y coordinate for starting point of line
    * @param {String} x coordinate for ending point of line
    * @param {String} y coordinate for ending point of line
    * @return {Array} point to point line coordinates
    */
    var buildLineDataRobotOne = function(x1, y1, x2, y2) {
        return buildLineData(robotOneGroupStartX + x1,
            robotOneGroupStartY + y1,
            robotOneGroupStartX + x2,
            robotOneGroupStartY + y2);
    }

    /**
    * Builds robot one circle element and adds to element passed in
    * @param {Element} addToElement element to add the circle to
    * @param {Integer} circle center x coordinate
    * @param {Integer} circle center y coordinate
    * @param {Integer} radius of circle
    * @param {String} id for circle
    * @param {String} circle fill color
    * @param {String} circle opacity
    */
    var buildAndAppendCircleRobotOne = function(addToElement, cx, cy, radius, id, fillColor, opacity) {
        buildAndAppendCircle(addToElement, robotOneGroupStartX + cx, robotOneGroupStartY + cy, radius, id, fillColor, opacity);
    }

    var leftAntenaGraph = robotOneGroupHead.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotOne(440, 170, 415, 130)))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var leftAntenaCircle = buildAndAppendCircleRobotOne(robotOneGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);

    var leftAntenaBoltData1 = [{
        "x": robotOneGroupStartX + 390,
        "y": robotOneGroupStartY + 130
    }, {
        "x": robotOneGroupStartX + 360,
        "y": robotOneGroupStartY + 150
    }, {
        "x": robotOneGroupStartX + 340,
        "y": robotOneGroupStartY + 130
    }, {
        "x": robotOneGroupStartX + 325,
        "y": robotOneGroupStartY + 150
    }, {
        "x": robotOneGroupStartX + 315,
        "y": robotOneGroupStartY + 130
    }, {
        "x": robotOneGroupStartX + 310,
        "y": robotOneGroupStartY + 150
    }];

    var robotOneLeftAntenaBoltLineGraph1 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", lineDataAccessor(leftAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotOneLeftAntenaBoltLineGraph1");

    var leftAntenaBoltData2 = [{
        "x": robotOneGroupStartX + 420,
        "y": robotOneGroupStartY + 110
    }, {
        "x": robotOneGroupStartX + 435,
        "y": robotOneGroupStartY + 95
    }, {
        "x": robotOneGroupStartX + 425,
        "y": robotOneGroupStartY + 75
    }, {
        "x": robotOneGroupStartX + 440,
        "y": robotOneGroupStartY + 60
    }, {
        "x": robotOneGroupStartX + 430,
        "y": robotOneGroupStartY + 50
    }, {
        "x": robotOneGroupStartX + 445,
        "y": robotOneGroupStartY + 45
    }];

    var robotOneLeftAntenaBoltLineGraph2 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", lineDataAccessor(leftAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotOneLeftAntenaBoltLineGraph2");

    var rightAntenaGraph = robotOneGroupHead.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotOne(560, 170, 585, 130)))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var rightAntenaCircle = buildAndAppendCircleRobotOne(robotOneGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);


    var rightAntenaBoltData1 = [{
        "x": robotOneGroupStartX + 610,
        "y": robotOneGroupStartY + 130
    }, {
        "x": robotOneGroupStartX + 635,
        "y": robotOneGroupStartY + 150
    }, {
        "x": robotOneGroupStartX + 660,
        "y": robotOneGroupStartY + 140
    }, {
        "x": robotOneGroupStartX + 685,
        "y": robotOneGroupStartY + 160
    }, {
        "x": robotOneGroupStartX + 710,
        "y": robotOneGroupStartY + 150
    }, {
        "x": robotOneGroupStartX + 735,
        "y": robotOneGroupStartY + 170
    }];

    var robotOneRightAntenaBoltLineGraph1 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", lineDataAccessor(rightAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotOneRightAntenaBoltLineGraph1");

    var rightAntenaBoltData2 = [{
        "x": robotOneGroupStartX + 585,
        "y": robotOneGroupStartY + 100
    }, {
        "x": robotOneGroupStartX + 600,
        "y": robotOneGroupStartY + 75
    }, {
        "x": robotOneGroupStartX + 580,
        "y": robotOneGroupStartY + 55
    }, {
        "x": robotOneGroupStartX + 600,
        "y": robotOneGroupStartY + 40
    }, {
        "x": robotOneGroupStartX + 580,
        "y": robotOneGroupStartY + 30
    }, {
        "x": robotOneGroupStartX + 600,
        "y": robotOneGroupStartY + 15
    }];

    var robotOneRightAntenaBoltLineGraph2 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", lineDataAccessor(rightAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotOneRightAntenaBoltLineGraph2");

    var robotOneHead = buildAndAppendCircleRobotOne(robotOneGroupHead, 500, 285, 135, "robotOneHead", "#cce6ff", 1);

    var robotOneHeadHide = robotOneGroupHead.append("rect")
        .attr("x", robotOneGroupStartX + 360)
        .attr("y", robotOneGroupStartY + 270)
        .attr("width", 280)
        .attr("height", 30)
        .style("fill", "White")
        .style("opacity", 1);

    var robotOneHeadSpeak = robotOneGroupHead.append("rect")
        .attr("x", robotOneGroupStartX + 365)
        .attr("y", robotOneGroupStartY + 270)
        .attr("width", 269)
        .attr("height", 30)
        .attr("fill", "yellow")
        .attr("id", "robotOneSpeaker")
        .style("opacity", 1);

    var robotOneHeadLeftEye = buildAndAppendCircleRobotOne(robotOneGroupHead, 440, 215, 20, "robotOneHeadLeftEye", "white", 1);
    var robotOneHeadRightEye = buildAndAppendCircleRobotOne(robotOneGroupHead, 560, 215, 20, "robotOneHeadRightEye", "white", 1);
    var robotOneHeadLeftEyePupil = buildAndAppendCircleRobotOne(robotOneGroupHead, 440, 215, 12, "robotOneHeadLeftEyePupil", "black", 1);
    var robotOneHeadRightEyePupil = buildAndAppendCircleRobotOne(robotOneGroupHead, 560, 215, 12, "robotOneHeadRightEyePupil", "black", 1);


    var robotOneBody = robotOneGroupBody.append("rect")
        .attr("x", robotOneGroupStartX + 350)
        .attr("y", robotOneGroupStartY + 300)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#cce6ff")
        .style("opacity", 1);

    var robotOneGroupLeftLeg = robotOneGroup.append("g");
    var robotOneLeftLeg1 = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 430, 530, 30, "robotOneLeftLeg1", "999999", 1);
    var robotOneLeftLeg2 = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 410, 585, 30, "robotOneLeftLeg2", "999999", 1);
    var robotOneleftLeg3 = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 410, 640, 30, "robotOneLeftLeg1", "999999", 1);
    var robotOneLeftLegFoot = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 410, 715, 50, "robotOneLeftLegFoot", "#e69500", 1);
    var robotOneLeftLegFootHide = robotOneGroupLeftLeg.append("rect")
        .attr("x", robotOneGroupStartX + 360)
        .attr("y", robotOneGroupStartY + 700)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "White")
        .style("opacity", 1);

    var robotOneGroupRightLeg = robotOneGroup.append("g");
    var robotOneRightLeg1 = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 570, 530, 30, "robotOneRightLeg1", "999999", 1);
    var robotOneRightLeg2 = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 590, 585, 30, "robotOneRightLeg2", "999999", 1);
    var robotOneRightLeg3 = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 590, 640, 30, "robotOneRightLeg3", "999999", 1);
    var robotOneRightLegFoot = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 590, 715, 50, "robotOneRightLegFoot", "#e69500", 1);
    var robotOneRightLegFootHide = robotOneGroupRightLeg.append("rect")
        .attr("x", robotOneGroupStartX + 540)
        .attr("y", robotOneGroupStartY + 700)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "White")
        .style("opacity", 1);

    var robotOneGroupLeftArm = robotOneGroup.append("g");
    var robotOneLeftArm1 = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 320, 340, 30, "robotOneLeftArm1", "#999999", 1);
    var robotOneLeftArm2 = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 290, 390, 30, "robotOneLeftArm2", "#999999", 1);
    var robotOneleftArm3 = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 253, 435, 30, "robotOneleftArm3", "#999999", 1);
    var robotOneLeftArmHand = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 207, 478, 35, "robotOneLeftArmHand", "#e69500", 1);
    var robotOneLeftArmHandHide = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 190, 488, 30, "robotOneLeftArmHandHide", "white", 1);


    var robotOneGroupRightArm = robotOneGroup.append("g");

    // var robotOneRightArm1 = robotOneGroupRightArm.append("circle")
    //     .attr("cx", robotOneGroupStartX + 680)
    //     .attr("cy", robotOneGroupStartY + 340)
    //     .attr("r", 30)
    //     .style("fill", "#999999")
    //     .style("opacity", 1);
    var robotOneRightArm1 = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 680, 340, 30, "robotOneRightArm1", "#999999", 1);

    // var robotOneRightArm2 = robotOneGroupRightArm.append("circle")
    //     .attr("cx", robotOneGroupStartX + 735)
    //     .attr("cy", robotOneGroupStartY + 357)
    //     .attr("r", 30)
    //     .style("fill", "#999999")
    //     .style("opacity", 1);
    var robotOneRightArm2 = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 735, 357, 30, "robotOneRightArm2", "#999999", 1);

    // var robotOneRightArm3 = robotOneGroupRightArm.append("circle")
    //     .attr("cx", robotOneGroupStartX + 790)
    //     .attr("cy", robotOneGroupStartY + 374)
    //     .attr("r", 30)
    //     .style("fill", "#999999")
    //     .style("opacity", 1);
    var robotOneRightArm3 = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 790, 374, 30, "robotOneRightArm3", "#999999", 1);

    //var robotOneRightArmHand = robotOneGroupRightArm.append("circle")
        // .attr("cx", robotOneGroupStartX + 848)
        // .attr("cy", robotOneGroupStartY + 400)
        // .attr("r", 35)
        // .style("fill", "#e69500")
        // .style("opacity", 1);
    var robotOneRightArmHand = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 848, 400, 35, "robotOneRightArmHand", "#e69500", 1);

    // var robotOneRightArmHandHide = robotOneGroupRightArm.append("circle")
    //     .attr("cx", robotOneGroupStartX + 863)
    //     .attr("cy", robotOneGroupStartY + 406)
    //     .attr("r", 30)
    //     .style("fill", "white")
    //     .style("opacity", 1);
    var robotOneRightArmHandHide = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 863, 406, 30, "robotOneRightArmHandHide", "white", 1);

}
