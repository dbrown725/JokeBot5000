
function loadRobotTwo() {

    var robotTwoGroup = svgContainer.append("g");

    var robotTwoGroupBody = robotTwoGroup.append("g");

    var robotTwoGroupHead = robotTwoGroup.append("g").attr("id", "robotTwoGroupHead");

    var robotTwoGroupStartX = 1550;

    var robotTwoGroupStartY = 25;

    /**
    * For robot one builds Array containing params x/y line coordinates
    * @param {Integer} x coordinate for starting point of line
    * @param {Integer} y coordinate for starting point of line
    * @param {Integer} x coordinate for ending point of line
    * @param {Integer} y coordinate for ending point of line
    * @return {Array} point to point line coordinates
    */
    var buildLineDataRobotTwo = function(x1, y1, x2, y2) {
        return buildLineData(robotTwoGroupStartX + x1,
            robotTwoGroupStartY + y1,
            robotTwoGroupStartX + x2,
            robotTwoGroupStartY + y2);
    }

    /**
    * Builds robot one circle element and adds to element passed in
    * @param {Element} addToElement element to add the circle to
    * @param {Integer} circle center x coordinate
    * @param {Integer} circle center y coordinate
    * @param {Integer} radius of circle
    * @param {String} id for circle
    * @param {String} circle fill color
    * @param {Integer} circle opacity
    * @return {Element} circle
    */
    var buildAndAppendCircleRobotTwo = function(addToElement, cx, cy, radius, id, fillColor, opacity) {
        return buildAndAppendCircle(addToElement, robotTwoGroupStartX + cx, robotTwoGroupStartY + cy, radius, id, fillColor, opacity);
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
    var buildAndAppendRectRobotTwo = function(addToElement, x, y, width, height, id, fillColor, opacity) {
        return buildAndAppendRect(addToElement, robotTwoGroupStartX + x, robotTwoGroupStartY + y, width, height, id, fillColor, opacity);
    }

    /**
    * Adds startX and startY values to xy array values
    * and calls buildXYPointObjectArray
    * @param {Array} array of xy arrays
    * @return {Array} array of x y data point objects
    */
    var buildRobotTwoXYPointArray = function(data) {
        var xy = [];
        for (var i = 0; i < data.length; i++) {
            xy.push([
                robotTwoGroupStartX + data[i][0],
                robotTwoGroupStartY + data[i][1]
            ])
        }
        return buildXYPointObjectArray(xy);
    }

    var leftAntena = buildAndAppendPath(robotTwoGroupHead, buildLineDataRobotTwo(440, 170, 415, 130), "#999999", 6, "leftAntenaGraph", "");
    var leftAntenaCircle = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);
    var leftAntenaBoltData1 = buildRobotTwoXYPointArray([[390, 130],[360,150],[340,130],[325,150],[315,130],[310,150]]);
    var robotTwoLeftAntenaBoltLineGraph1 = buildAndAppendPath(robotTwoGroupHead, leftAntenaBoltData1, "white", 3, "robotTwoLeftAntenaBoltLineGraph1", "none");
    var leftAntenaBoltData2 = buildRobotTwoXYPointArray([[420, 110],[435,95],[425,75],[440,60],[430,50],[445,45]]);
    var robotTwoLeftAntenaBoltLineGraph2 = buildAndAppendPath(robotTwoGroupHead, leftAntenaBoltData2, "white", 3, "robotTwoLeftAntenaBoltLineGraph2", "none");

    var rightAntena = buildAndAppendPath(robotTwoGroupHead, buildLineDataRobotTwo(560, 170, 585, 130), "#999999", 6, "rightAntenaGraph", "none");
    var rightAntenaCircle = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);
    var rightAntenaBoltData1 = buildRobotTwoXYPointArray([[610, 130],[635,150],[660,140],[685,160],[710,150],[735,170]]);
    var robotTwoRightAntenaBoltLineGraph1 = buildAndAppendPath(robotTwoGroupHead, rightAntenaBoltData1, "white", 3, "robotTwoRightAntenaBoltLineGraph1", "none");
    var rightAntenaBoltData2 = buildRobotTwoXYPointArray([[585, 100],[600,75],[580,55],[600,40],[580,30],[600,15]]);
    var robotTwoRightAntenaBoltLineGraph2 = buildAndAppendPath(robotTwoGroupHead, rightAntenaBoltData2, "white", 3, "robotTwoRightAntenaBoltLineGraph2", "none");

    var robotTwoHead = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 500, 285, 135, "robotTwoHead", "#ffcce6", 1);
    var robotTwoHeadHide = buildAndAppendRectRobotTwo(robotTwoGroupHead, 366, 271, 269, 28, "robotTwoHeadHide", "robotTwoHeadHide", "white", 1);

    var robotTwoSpeaker = buildAndAppendRectRobotTwo(robotTwoGroupHead, 365, 270, 271, 30, "robotTwoSpeaker", "yellow", 1);

    var robotTwoHeadLeftEye = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 440, 215, 20, "robotTwoHeadLeftEye", "white", 1);
    var robotTwoHeadRightEye = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 560, 215, 20, "robotTwoHeadRightEye", "white", 1);
    var robotTwoHeadLeftEyePupil = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 440, 215, 12, "robotTwoHeadLeftEyePupil", "black", 1);
    var robotTwoHeadRightEyePupil = buildAndAppendCircleRobotTwo(robotTwoGroupHead, 560, 215, 12, "robotTwoHeadRightEyePupil", "black", 1);

    var robotTwoBody = buildAndAppendRectRobotTwo(robotTwoGroupBody, 350, 300, 300, 200, "robotTwoBody", "#ffcce6", 1);

    var robotTwoGroupLeftLeg = robotTwoGroup.append("g");
    var robotTwoLeftLeg1 = buildAndAppendCircleRobotTwo(robotTwoGroupLeftLeg, 430, 530, 30, "robotTwoLeftLeg1", "999999", 1);
    var robotTwoLeftLeg2 = buildAndAppendCircleRobotTwo(robotTwoGroupLeftLeg, 410, 585, 30, "robotTwoLeftLeg2", "999999", 1);
    var robotTwoleftLeg3 = buildAndAppendCircleRobotTwo(robotTwoGroupLeftLeg, 410, 640, 30, "robotTwoLeftLeg1", "999999", 1);
    var robotTwoLeftLegFoot = buildAndAppendCircleRobotTwo(robotTwoGroupLeftLeg, 410, 715, 50, "robotTwoLeftLegFoot", "#e69500", 1);
    var robotTwoLeftLegFootHide = buildAndAppendRectRobotTwo(robotTwoGroupLeftLeg, 360, 700, 100, 100, "robotTwoLeftLegFootHide", "white", 1);

    var robotTwoGroupRightLeg = robotTwoGroup.append("g");
    var robotTwoRightLeg1 = buildAndAppendCircleRobotTwo(robotTwoGroupRightLeg, 570, 530, 30, "robotTwoRightLeg1", "999999", 1);
    var robotTwoRightLeg2 = buildAndAppendCircleRobotTwo(robotTwoGroupRightLeg, 590, 585, 30, "robotTwoRightLeg2", "999999", 1);
    var robotTwoRightLeg3 = buildAndAppendCircleRobotTwo(robotTwoGroupRightLeg, 590, 640, 30, "robotTwoRightLeg3", "999999", 1);
    var robotTwoRightLegFoot = buildAndAppendCircleRobotTwo(robotTwoGroupRightLeg, 590, 715, 50, "robotTwoRightLegFoot", "#e69500", 1);
    var robotTwoRightLegFootHide = buildAndAppendRectRobotTwo(robotTwoGroupRightLeg, 540, 700, 100, 100, "robotTwoRightLegFootHide", "white", 1);

    var robotTwoGroupLeftArm = robotTwoGroup.append("g");
    var robotTwoLeftArm1 = buildAndAppendCircleRobotTwo(robotTwoGroupLeftArm, 320, 340, 30, "robotTwoLeftArm1", "#999999", 1);
    var robotTwoLeftArm2 = buildAndAppendCircleRobotTwo(robotTwoGroupLeftArm, 290, 390, 30, "robotTwoLeftArm2", "#999999", 1);
    var robotTwoleftArm3 = buildAndAppendCircleRobotTwo(robotTwoGroupLeftArm, 253, 435, 30, "robotTwoleftArm3", "#999999", 1);
    var robotTwoLeftArmHand = buildAndAppendCircleRobotTwo(robotTwoGroupLeftArm, 207, 478, 35, "robotTwoLeftArmHand", "#e69500", 1);
    var robotTwoLeftArmHandHide = buildAndAppendCircleRobotTwo(robotTwoGroupLeftArm, 190, 488, 30, "robotTwoLeftArmHandHide", "white", 1);

    var robotTwoGroupRightArm = robotTwoGroup.append("g");
    var robotTwoRightArm1 = buildAndAppendCircleRobotTwo(robotTwoGroupRightArm, 680, 340, 30, "robotTwoRightArm1", "#999999", 1);
    var robotTwoRightArm2 = buildAndAppendCircleRobotTwo(robotTwoGroupRightArm, 735, 357, 30, "robotTwoRightArm2", "#999999", 1);
    var robotTwoRightArm3 = buildAndAppendCircleRobotTwo(robotTwoGroupRightArm, 790, 374, 30, "robotTwoRightArm3", "#999999", 1);
    var robotTwoRightArmHand = buildAndAppendCircleRobotTwo(robotTwoGroupRightArm, 848, 400, 35, "robotTwoRightArmHand", "#e69500", 1);
    var robotTwoRightArmHandHide = buildAndAppendCircleRobotTwo(robotTwoGroupRightArm, 863, 406, 30, "robotTwoRightArmHandHide", "white", 1);

    robotTwoGroup.attr("transform", "scale(.5)translate(70, 100)");
}
