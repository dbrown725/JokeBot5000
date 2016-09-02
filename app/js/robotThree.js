
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
    var robotThreeHeadHide = buildAndAppendRectRobotThree(robotThreeGroupHead, 366, 271, 268, 28, "robotThreeHeadHide", "robotThreeHeadHide", "white", 1);

    var robotThreeSpeaker = buildAndAppendRectRobotThree(robotThreeGroupHead, 365, 269, 270, 32, "robotThreeSpeaker", "yellow", 1);

    var robotThreeHeadLeftEye = buildAndAppendCircleRobotThree(robotThreeGroupHead, 440, 215, 20, "robotThreeHeadLeftEye", "white", 1);
    var robotThreeHeadRightEye = buildAndAppendCircleRobotThree(robotThreeGroupHead, 560, 215, 20, "robotThreeHeadRightEye", "white", 1);
    var robotThreeHeadLeftEyePupil = buildAndAppendCircleRobotThree(robotThreeGroupHead, 440, 215, 12, "robotThreeHeadLeftEyePupil", "black", 1);
    var robotThreeHeadRightEyePupil = buildAndAppendCircleRobotThree(robotThreeGroupHead, 560, 215, 12, "robotThreeHeadRightEyePupil", "black", 1);

    var robotThreeBody = buildAndAppendRectRobotThree(robotThreeGroupBody, 350, 300, 300, 200, "robotThreeBody", "#ccffe5", 1);


    var robotThreeGroupLeftArm = robotThreeGroupBody.append("g");

    var robotThreeLeftArm1 = robotThreeGroupLeftArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 320)
        .attr("cy", robotThreeGroupStartY + 340)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotThreeLeftArm2 = robotThreeGroupLeftArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 270)
        .attr("cy", robotThreeGroupStartY + 360)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotThreeleftArm3 = robotThreeGroupLeftArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 280)
        .attr("cy", robotThreeGroupStartY + 380)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotThreeLeftArmHand = robotThreeGroupLeftArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 290)
        .attr("cy", robotThreeGroupStartY + 400)
        .attr("r", 35)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotThreeLeftArmHandHide = robotThreeGroupLeftArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 310)
        .attr("cy", robotThreeGroupStartY + 400)
        .attr("r", 30)
        .style("fill", "white")
        .style("opacity", 1);

    var leftDrumStickGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(280, 390, 430, 369)))
        .attr("stroke", "#f2ca7f")
        .attr("stroke-width", 8)
        .attr("id", "leftDrumStick")
        .attr("fill", "none");

    var robotThreeGroupRightArm = robotThreeGroupBody.append("g");

    var robotThreeRightArm1 = robotThreeGroupRightArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 680)
        .attr("cy", robotThreeGroupStartY + 340)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotThreeRightArm2 = robotThreeGroupRightArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 670)
        .attr("cy", robotThreeGroupStartY + 400)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotThreeRightArm3 = robotThreeGroupRightArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 620)
        .attr("cy", robotThreeGroupStartY + 420)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotThreeRightArmHand = robotThreeGroupRightArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 560)
        .attr("cy", robotThreeGroupStartY + 420)
        .attr("r", 35)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotThreeRightArmHandHide = robotThreeGroupRightArm.append("circle")
        .attr("cx", robotThreeGroupStartX + 545)
        .attr("cy", robotThreeGroupStartY + 425)
        .attr("r", 30)
        .style("fill", "#ccffe5")
        .style("opacity", 1);

    var rightDrumStickGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(575, 425, 410, 340)))
        .attr("stroke", "#f2ca7f")
        .attr("stroke-width", 8)
        .attr("id", "rightDrumStick")
        .attr("fill", "none");

    var robotThreeGroupDrumKitSnare = robotThreeGroupDrumKit.append("rect")
        .attr("x", robotThreeGroupStartX + 300)
        .attr("y", robotThreeGroupStartY + 340)
        .attr("width", 250)
        .attr("height", 100)
        .attr("stroke", "black")
        .attr("fill", "grey")
        .attr("stroke-width", 2)
        .attr("transform", "rotate(10)")
        .attr("fill", "silver");

    var snareStandGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(335, 518, 335, 720)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var snareStandLeftLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(335, 720, 280, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var snareStandRightLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(335, 720, 390, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var cymbalStandGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(685, 338, 685, 720)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var cymbalStandLeftLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(685, 720, 630, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var cymbalStandRightLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(685, 720, 740, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var cymbal = robotThreeGroupDrumKit.append("ellipse")
       .attr("cx", 655)
       .attr("cy", 510)
       .attr("rx", 160 )
       .attr("ry", 30 )
       .attr("id", "cymbal")
       .attr("transform", "rotate(-10)")
       .style("fill", "gold");

    var kickStandLeftLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(445, 720, 400, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var kickStandRightLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(555, 720, 600, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    var robotThreeGroupDrumKitKick = robotThreeGroupDrumKit.append("circle")
        .attr("cx", robotThreeGroupStartX + 500)
        .attr("cy", robotThreeGroupStartY + 600)
        .attr("r", 160)
        .attr("id", "kickDrum")
        .attr("stroke", "black")
        .attr("fill", "grey")
        .attr("stroke-width", 2)
        .attr("fill", "#ccc");

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
