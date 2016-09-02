
function loadRobotThree() {

    var robotThreeGroup = svgContainer.append("g").attr("id", "robotThreeGroup");

    var robotThreeGroupBody = robotThreeGroup.append("g");

    var robotThreeGroupHead = robotThreeGroup.append("g").attr("id", "robotThreeGroupHead");

    var robotThreeGroupDrumKit = robotThreeGroup.append("g").attr("id", "robotThreeGroupDrumKit");

    var robotThreeGroupStartX = 50;

    var robotThreeGroupStartY = 25;

    /**
    * For robot three builds Array containing params x/y line coordinates
    * @param {String} x coordinate for starting point of line
    * @param {String} y coordinate for starting point of line
    * @param {String} x coordinate for ending point of line
    * @param {String} y coordinate for ending point of line
    * @return {Array} point to point line coordinates
    */
    var buildLineDataRobotThree = function(x1, y1, x2, y2) {
        return buildLineData(robotThreeGroupStartX + x1,
            robotThreeGroupStartY + y1,
            robotThreeGroupStartX + x2,
            robotThreeGroupStartY + y2);
    }

    /**
    * Builds robot three circle element and adds to element passed in
    * @param {Element} addToElement element to add the circle to
    * @param {Integer} circle center x coordinate
    * @param {Integer} circle center y coordinate
    * @param {Integer} radius of circle
    * @param {String} id for circle
    * @param {String} circle fill color
    * @param {Integer} circle opacity
    * @return {Element} circle
    */
    var buildAndAppendCircleRobotThree = function(addToElement, cx, cy, radius, id, fillColor, opacity) {
        return buildAndAppendCircle(addToElement, robotThreeGroupStartX + cx, robotThreeGroupStartY + cy, radius, id, fillColor, opacity);
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
    var buildAndAppendRectRobotThree = function(addToElement, x, y, width, height, id, fillColor, opacity) {
        return buildAndAppendRect(addToElement, robotThreeGroupStartX + x, robotThreeGroupStartY + y, width, height, id, fillColor, opacity);
    }

    /**
    * Adds startX and startY values to xy array values
    * and calls buildXYPointObjectArray
    * @param {Array} array of xy arrays
    * @return {Array} array of x y data point objects
    */
    var buildRobotThreeXYPointArray = function(data) {
        var xy = [];
        for (var i = 0; i < data.length; i++) {
            xy.push([
                robotThreeGroupStartX + data[i][0],
                robotThreeGroupStartY + data[i][1]
            ])
        }
        return buildXYPointObjectArray(xy);
    }

    var leftAntena = buildAndAppendPath(robotThreeGroupHead, buildLineDataRobotThree(440, 170, 415, 130), "#999999", 6, "leftAntenaGraph", "");
    var leftAntenaCircle = buildAndAppendCircleRobotThree(robotThreeGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);
    var leftAntenaBoltData1 = buildRobotThreeXYPointArray([[390, 130],[360,150],[340,130],[325,150],[315,130],[310,150]]);
    var robotThreeLeftAntenaBoltLineGraph1 = buildAndAppendPath(robotThreeGroupHead, leftAntenaBoltData1, "white", 3, "robotThreeLeftAntenaBoltLineGraph1", "none");
    var leftAntenaBoltData2 = buildRobotThreeXYPointArray([[420, 110],[435,95],[425,75],[440,60],[430,50],[445,45]]);
    var robotThreeLeftAntenaBoltLineGraph2 = buildAndAppendPath(robotThreeGroupHead, leftAntenaBoltData2, "white", 3, "robotThreeLeftAntenaBoltLineGraph2", "none");

    var rightAntena = buildAndAppendPath(robotThreeGroupHead, buildLineDataRobotThree(560, 170, 585, 130), "#999999", 6, "rightAntenaGraph", "none");
    var rightAntenaCircle = buildAndAppendCircleRobotThree(robotThreeGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);
    var rightAntenaBoltData1 = buildRobotThreeXYPointArray([[610, 130],[635,150],[660,140],[685,160],[710,150],[735,170]]);
    var robotThreeRightAntenaBoltLineGraph1 = buildAndAppendPath(robotThreeGroupHead, rightAntenaBoltData1, "white", 3, "robotThreeRightAntenaBoltLineGraph1", "none");
    var rightAntenaBoltData2 = buildRobotThreeXYPointArray([[585, 100],[600,75],[580,55],[600,40],[580,30],[600,15]]);
    var robotThreeRightAntenaBoltLineGraph2 = buildAndAppendPath(robotThreeGroupHead, rightAntenaBoltData2, "white", 3, "robotThreeRightAntenaBoltLineGraph2", "none");

    var robotThreeHead = buildAndAppendCircleRobotThree(robotThreeGroupHead, 500, 285, 135, "robotThreeHead", "#ccffe5", 1);
    var robotThreeHeadHide = buildAndAppendRectRobotThree(robotThreeGroupHead, 366, 271, 268, 28, "robotThreeHeadHide", "", 1);

    var robotThreeSpeaker = buildAndAppendRectRobotThree(robotThreeGroupHead, 365, 269, 270, 32, "robotThreeSpeaker", "yellow", 1);

    var robotThreeHeadLeftEye = buildAndAppendCircleRobotThree(robotThreeGroupHead, 440, 215, 20, "robotThreeHeadLeftEye", "white", 1);
    var robotThreeHeadRightEye = buildAndAppendCircleRobotThree(robotThreeGroupHead, 560, 215, 20, "robotThreeHeadRightEye", "white", 1);
    var robotThreeHeadLeftEyePupil = buildAndAppendCircleRobotThree(robotThreeGroupHead, 440, 215, 12, "robotThreeHeadLeftEyePupil", "black", 1);
    var robotThreeHeadRightEyePupil = buildAndAppendCircleRobotThree(robotThreeGroupHead, 560, 215, 12, "robotThreeHeadRightEyePupil", "black", 1);

    var robotThreeBody = buildAndAppendRectRobotThree(robotThreeGroupBody, 350, 300, 300, 200, "robotThreeBody", "#ccffe5", 1);

    var robotThreeGroupLeftArm = robotThreeGroupBody.append("g");
    var robotThreeLeftArm1 = buildAndAppendCircleRobotThree(robotThreeGroupLeftArm, 320, 340, 30, "robotThreeLeftArm1", "#999999", 1);
    var robotThreeLeftArm2 = buildAndAppendCircleRobotThree(robotThreeGroupLeftArm, 270, 360, 30, "robotThreeLeftArm2", "#999999", 1);
    var robotThreeleftArm3 = buildAndAppendCircleRobotThree(robotThreeGroupLeftArm, 280, 380, 30, "robotThreeleftArm3", "#999999", 1);
    var robotThreeLeftArmHand = buildAndAppendCircleRobotThree(robotThreeGroupLeftArm, 290, 400, 35, "robotThreeLeftArmHand", "#e69500", 1);
    var robotThreeLeftArmHandHide = buildAndAppendCircleRobotThree(robotThreeGroupLeftArm, 310, 400, 30, "robotThreeLeftArmHandHide", "white", 1);
    var leftDrumStickGraph = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(280, 390, 430, 369), "#f2ca7f", 8, "leftDrumStick", "none");

    var robotThreeGroupRightArm = robotThreeGroupBody.append("g");
    var robotThreeRightArm1 = buildAndAppendCircleRobotThree(robotThreeGroupRightArm, 680, 340, 30, "robotThreeRightArm1", "#999999", 1);
    var robotThreeRightArm2 = buildAndAppendCircleRobotThree(robotThreeGroupRightArm, 670, 400, 30, "robotThreeRightArm2", "#999999", 1);
    var robotThreeRightArm3 = buildAndAppendCircleRobotThree(robotThreeGroupRightArm, 620, 420, 30, "robotThreeRightArm3", "#999999", 1);
    var robotThreeRightArmHand = buildAndAppendCircleRobotThree(robotThreeGroupRightArm, 560, 420, 35, "robotThreeRightArmHand", "#e69500", 1);
    var robotThreeRightArmHandHide = buildAndAppendCircleRobotThree(robotThreeGroupRightArm, 545, 425, 30, "robotThreeRightArmHandHide", "#ccffe5", 1);
    var rightDrumStick = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(575, 425, 410, 340), "#f2ca7f", 8, "rightDrumStick", "none");

    var robotThreeGroupDrumKitSnare = buildAndAppendRectRobotThree(robotThreeGroupDrumKit, 300, 340, 250, 100, "robotThreeGroupDrumKitSnare", "#ccc", 1);
    robotThreeGroupDrumKitSnare.attr("stroke", "black").attr("stroke-width", 2).attr("transform", "rotate(10)");

    var snareStand = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(335, 518, 335, 720), "black", 3, "snareStand", "none");
    var snareStandLeftLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(335, 720, 280, 760), "black", 3, "snareStandLeftLeg", "none");
    var snareStandRightLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(335, 720, 390, 760), "black", 3, "snareStandRightLeg", "none");

    var cymbalStand = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(685, 338, 685, 720), "black", 3, "cymbalStand", "none");
    var cymbalStandLeftLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(685, 720, 630, 760), "black", 3, "cymbalStandLeftLeg", "none");
    var cymbalStandRightLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(685, 720, 740, 760), "black", 3, "cymbalStandRightLeg", "none");
    var cymbal = robotThreeGroupDrumKit.append("ellipse")
       .attr("cx", 655)
       .attr("cy", 510)
       .attr("rx", 160 )
       .attr("ry", 30 )
       .attr("id", "cymbal")
       .attr("transform", "rotate(-10)")
       .style("fill", "gold");

    var kickStandLeftLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(445, 720, 400, 760), "black", 3, "kickStandLeftLeg", "none");
    var kickStandRightLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineDataRobotThree(555, 720, 600, 760), "black", 3, "kickStandRightLeg", "none");

    var robotThreeGroupDrumKitKick = buildAndAppendCircleRobotThree(robotThreeGroupDrumKit, 500, 600, 160, "robotThreeGroupDrumKitKick", "#ccc", 1);
    robotThreeGroupDrumKitKick.attr("stroke", "black").attr("stroke-width", 2);

    var robotThreeGroupDrumKitKickTextJokeBot = robotThreeGroupDrumKit.append("text").text("JokeBot")
			.attr("x", robotThreeGroupStartX + 265)
			 .attr("y", robotThreeGroupStartY + 680)
			 .attr("font-family", "sans-serif")
			 .attr("font-size", "60px")
			 .attr("fill", "white")
			 .style("font-weight", "bold")
             .attr("transform", "rotate(-10)");

     var robotThreeGroupDrumKitKickText5000 = robotThreeGroupDrumKit.append("text").text("5000")
 			.attr("x", robotThreeGroupStartX + 320)
 			 .attr("y", robotThreeGroupStartY + 740)
 			 .attr("font-family", "sans-serif")
 			 .attr("font-size", "60px")
 			 .attr("fill", "white")
 			 .style("font-weight", "bold")
              .attr("transform", "rotate(-10)");

    robotThreeGroup.attr("transform", "scale(.35)translate(50, 100)");
}
