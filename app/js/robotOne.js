
function loadRobotOne() {

    var robotOneGroup = svgContainer.append("g");

    var robotOneGroupBody = robotOneGroup.append("g");

    var robotOneGroupHead = robotOneGroup.append("g").attr("id", "robotOneGroupHead");

    var robotOneGroupStartX = 150;
    var robotOneGroupStartY = 75;

    /**
    * For robot one builds Array containing params x/y line coordinates
    * @param {Integer} x coordinate for starting point of line
    * @param {Integer} y coordinate for starting point of line
    * @param {Integer} x coordinate for ending point of line
    * @param {Integer} y coordinate for ending point of line
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
    * @param {Integer} circle opacity
    * @return {Element} circle
    */
    var buildAndAppendCircleRobotOne = function(addToElement, cx, cy, radius, id, fillColor, opacity) {
        return buildAndAppendCircle(addToElement, robotOneGroupStartX + cx, robotOneGroupStartY + cy, radius, id, fillColor, opacity);
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
    var buildAndAppendRectRobotOne = function(addToElement, x, y, width, height, id, fillColor, opacity) {
        return buildAndAppendRect(addToElement, robotOneGroupStartX + x, robotOneGroupStartY + y, width, height, id, fillColor, opacity);
    }

    /**
    * Adds startX and startY values to xy array values
    * and calls buildXYPointObjectArray
    * @param {Array} array of xy arrays
    * @return {Array} array of x y data point objects
    */
    var buildRobotOneXYPointArray = function(data) {
        var xy = [];
        for (var i = 0; i < data.length; i++) {
            xy.push([
                robotOneGroupStartX + data[i][0],
                robotOneGroupStartY + data[i][1]
            ])
        }
        return buildXYPointObjectArray(xy);
    }

    var leftAntena = buildAndAppendPath(robotOneGroupHead, buildLineDataRobotOne(440, 170, 415, 130), "#999999", 6, "leftAntenaGraph", "");
    var leftAntenaCircle = buildAndAppendCircleRobotOne(robotOneGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);
    var leftAntenaBoltData1 = buildRobotOneXYPointArray([[390, 130],[360,150],[340,130],[325,150],[315,130],[310,150]]);
    var robotOneLeftAntenaBoltLineGraph1 = buildAndAppendPath(robotOneGroupHead, leftAntenaBoltData1, "white", 3, "robotOneLeftAntenaBoltLineGraph1", "none");
    var leftAntenaBoltData2 = buildRobotOneXYPointArray([[420, 110],[435,95],[425,75],[440,60],[430,50],[445,45]]);
    var robotOneLeftAntenaBoltLineGraph2 = buildAndAppendPath(robotOneGroupHead, leftAntenaBoltData2, "white", 3, "robotOneLeftAntenaBoltLineGraph2", "none");

    var rightAntena = buildAndAppendPath(robotOneGroupHead, buildLineDataRobotOne(560, 170, 585, 130), "#999999", 6, "rightAntenaGraph", "none");
    var rightAntenaCircle = buildAndAppendCircleRobotOne(robotOneGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);
    var rightAntenaBoltData1 = buildRobotOneXYPointArray([[610, 130],[635,150],[660,140],[685,160],[710,150],[735,170]]);
    var robotOneRightAntenaBoltLineGraph1 = buildAndAppendPath(robotOneGroupHead, rightAntenaBoltData1, "white", 3, "robotOneRightAntenaBoltLineGraph1", "none");
    var rightAntenaBoltData2 = buildRobotOneXYPointArray([[585, 100],[600,75],[580,55],[600,40],[580,30],[600,15]]);
    var robotOneRightAntenaBoltLineGraph2 = buildAndAppendPath(robotOneGroupHead, rightAntenaBoltData2, "white", 3, "robotOneRightAntenaBoltLineGraph2", "none");

    var robotOneHead = buildAndAppendCircleRobotOne(robotOneGroupHead, 500, 285, 135, "robotOneHead", "#cce6ff", 1);
    var robotOneHeadHide = buildAndAppendRectRobotOne(robotOneGroupHead, 365, 270, 269, 30, "robotOneHeadHide", "", 1);

    var robotOneSpeaker = buildAndAppendRectRobotOne(robotOneGroupHead, 365, 270, 269, 30, "robotOneSpeaker", "yellow", 1);

    var robotOneHeadLeftEye = buildAndAppendCircleRobotOne(robotOneGroupHead, 440, 215, 20, "robotOneHeadLeftEye", "white", 1);
    var robotOneHeadRightEye = buildAndAppendCircleRobotOne(robotOneGroupHead, 560, 215, 20, "robotOneHeadRightEye", "white", 1);
    var robotOneHeadLeftEyePupil = buildAndAppendCircleRobotOne(robotOneGroupHead, 440, 215, 12, "robotOneHeadLeftEyePupil", "black", 1);
    var robotOneHeadRightEyePupil = buildAndAppendCircleRobotOne(robotOneGroupHead, 560, 215, 12, "robotOneHeadRightEyePupil", "black", 1);

    var robotOneBody = buildAndAppendRectRobotOne(robotOneGroupBody, 350, 300, 300, 200, "robotOneBody", "#cce6ff", 1);

    var robotOneGroupLeftLeg = robotOneGroup.append("g");
    var robotOneLeftLeg1 = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 430, 530, 30, "robotOneLeftLeg1", "999999", 1);
    var robotOneLeftLeg2 = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 410, 585, 30, "robotOneLeftLeg2", "999999", 1);
    var robotOneleftLeg3 = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 410, 640, 30, "robotOneLeftLeg1", "999999", 1);
    var robotOneLeftLegFoot = buildAndAppendCircleRobotOne(robotOneGroupLeftLeg, 410, 715, 50, "robotOneLeftLegFoot", "#e69500", 1);
    var robotOneLeftLegFootHide = buildAndAppendRectRobotOne(robotOneGroupLeftLeg, 360, 700, 100, 100, "robotOneLeftLegFootHide", "white", 1);

    var robotOneGroupRightLeg = robotOneGroup.append("g");
    var robotOneRightLeg1 = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 570, 530, 30, "robotOneRightLeg1", "999999", 1);
    var robotOneRightLeg2 = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 590, 585, 30, "robotOneRightLeg2", "999999", 1);
    var robotOneRightLeg3 = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 590, 640, 30, "robotOneRightLeg3", "999999", 1);
    var robotOneRightLegFoot = buildAndAppendCircleRobotOne(robotOneGroupRightLeg, 590, 715, 50, "robotOneRightLegFoot", "#e69500", 1);
    var robotOneRightLegFootHide = buildAndAppendRectRobotOne(robotOneGroupRightLeg, 540, 700, 100, 100, "robotOneRightLegFootHide", "white", 1);

    var robotOneGroupLeftArm = robotOneGroup.append("g");
    var robotOneLeftArm1 = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 320, 340, 30, "robotOneLeftArm1", "#999999", 1);
    var robotOneLeftArm2 = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 290, 390, 30, "robotOneLeftArm2", "#999999", 1);
    var robotOneleftArm3 = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 253, 435, 30, "robotOneleftArm3", "#999999", 1);
    var robotOneLeftArmHand = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 207, 478, 35, "robotOneLeftArmHand", "#e69500", 1);
    var robotOneLeftArmHandHide = buildAndAppendCircleRobotOne(robotOneGroupLeftArm, 190, 488, 30, "robotOneLeftArmHandHide", "white", 1);

    var robotOneGroupRightArm = robotOneGroup.append("g");
    var robotOneRightArm1 = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 680, 340, 30, "robotOneRightArm1", "#999999", 1);
    var robotOneRightArm2 = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 735, 357, 30, "robotOneRightArm2", "#999999", 1);
    var robotOneRightArm3 = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 790, 374, 30, "robotOneRightArm3", "#999999", 1);
    var robotOneRightArmHand = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 848, 400, 35, "robotOneRightArmHand", "#e69500", 1);
    var robotOneRightArmHandHide = buildAndAppendCircleRobotOne(robotOneGroupRightArm, 863, 406, 30, "robotOneRightArmHandHide", "white", 1);
}
