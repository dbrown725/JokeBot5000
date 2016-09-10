
function loadRobotTwo() {

    var robotTwoGroup = svgContainer.append("g").attr("id", "robotTwoGroup");

    var robotTwoGroupBody = robotTwoGroup.append("g");

    var robotTwoGroupHead = robotTwoGroup.append("g").attr("id", "robotTwoGroupHead");

    var leftAntena = buildAndAppendPath(robotTwoGroupHead, buildLineData(440, 170, 415, 130), "#999999", 6, "leftAntenaGraph", "");
    var leftAntenaCircle = buildAndAppendCircle(robotTwoGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);
    var leftAntenaBoltData1 = buildXYPointObjectArray([[390, 130],[360,150],[340,130],[325,150],[315,130],[310,150]]);
    var robotTwoLeftAntenaBoltLineGraph1 = buildAndAppendPath(robotTwoGroupHead, leftAntenaBoltData1, "white", 3, "robotTwoLeftAntenaBoltLineGraph1", "none");
    var leftAntenaBoltData2 = buildXYPointObjectArray([[420, 110],[435,95],[425,75],[440,60],[430,50],[445,45]]);
    var robotTwoLeftAntenaBoltLineGraph2 = buildAndAppendPath(robotTwoGroupHead, leftAntenaBoltData2, "white", 3, "robotTwoLeftAntenaBoltLineGraph2", "none");

    var rightAntena = buildAndAppendPath(robotTwoGroupHead, buildLineData(560, 170, 585, 130), "#999999", 6, "rightAntenaGraph", "none");
    var rightAntenaCircle = buildAndAppendCircle(robotTwoGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);
    var rightAntenaBoltData1 = buildXYPointObjectArray([[610, 130],[635,150],[660,140],[685,160],[710,150],[735,170]]);
    var robotTwoRightAntenaBoltLineGraph1 = buildAndAppendPath(robotTwoGroupHead, rightAntenaBoltData1, "white", 3, "robotTwoRightAntenaBoltLineGraph1", "none");
    var rightAntenaBoltData2 = buildXYPointObjectArray([[585, 100],[600,75],[580,55],[600,40],[580,30],[600,15]]);
    var robotTwoRightAntenaBoltLineGraph2 = buildAndAppendPath(robotTwoGroupHead, rightAntenaBoltData2, "white", 3, "robotTwoRightAntenaBoltLineGraph2", "none");

    var robotTwoHead = buildAndAppendCircle(robotTwoGroupHead, 500, 285, 135, "robotTwoHead", "#ffcce6", 1);
    var robotTwoHeadHide = buildAndAppendRect(robotTwoGroupHead, 366, 271, 269, 28, "robotTwoHeadHide", "white", 1);
    var robotTwoSpeaker = buildAndAppendPath(robotTwoGroupHead, buildLineData(365, 285, 634, 285), "yellow", 30, "robotTwoSpeaker", "none");

    var robotTwoHeadLeftEye = buildAndAppendCircle(robotTwoGroupHead, 440, 215, 20, "robotTwoHeadLeftEye", "white", 1);
    var robotTwoHeadRightEye = buildAndAppendCircle(robotTwoGroupHead, 560, 215, 20, "robotTwoHeadRightEye", "white", 1);
    var robotTwoHeadLeftEyePupil = buildAndAppendCircle(robotTwoGroupHead, 440, 215, 12, "robotTwoHeadLeftEyePupil", "black", 1);
    var robotTwoHeadRightEyePupil = buildAndAppendCircle(robotTwoGroupHead, 560, 215, 12, "robotTwoHeadRightEyePupil", "black", 1);

    var robotTwoBody = buildAndAppendRect(robotTwoGroupBody, 350, 300, 300, 200, "robotTwoBody", "#ffcce6", 1);

    var robotTwoGroupLeftLeg = robotTwoGroup.append("g");
    var robotTwoLeftLeg1 = buildAndAppendCircle(robotTwoGroupLeftLeg, 430, 530, 30, "robotTwoLeftLeg1", "999999", 1);
    var robotTwoLeftLeg2 = buildAndAppendCircle(robotTwoGroupLeftLeg, 410, 585, 30, "robotTwoLeftLeg2", "999999", 1);
    var robotTwoleftLeg3 = buildAndAppendCircle(robotTwoGroupLeftLeg, 410, 640, 30, "robotTwoLeftLeg1", "999999", 1);
    var robotTwoLeftLegFoot = buildAndAppendCircle(robotTwoGroupLeftLeg, 410, 715, 50, "robotTwoLeftLegFoot", "#e69500", 1);
    var robotTwoLeftLegFootHide = buildAndAppendRect(robotTwoGroupLeftLeg, 360, 700, 100, 100, "robotTwoLeftLegFootHide", "white", 1);

    var robotTwoGroupRightLeg = robotTwoGroup.append("g");
    var robotTwoRightLeg1 = buildAndAppendCircle(robotTwoGroupRightLeg, 570, 530, 30, "robotTwoRightLeg1", "999999", 1);
    var robotTwoRightLeg2 = buildAndAppendCircle(robotTwoGroupRightLeg, 590, 585, 30, "robotTwoRightLeg2", "999999", 1);
    var robotTwoRightLeg3 = buildAndAppendCircle(robotTwoGroupRightLeg, 590, 640, 30, "robotTwoRightLeg3", "999999", 1);
    var robotTwoRightLegFoot = buildAndAppendCircle(robotTwoGroupRightLeg, 590, 715, 50, "robotTwoRightLegFoot", "#e69500", 1);
    var robotTwoRightLegFootHide = buildAndAppendRect(robotTwoGroupRightLeg, 540, 700, 100, 100, "robotTwoRightLegFootHide", "white", 1);

    var robotTwoGroupLeftArm = robotTwoGroup.append("g");
    var robotTwoLeftArm1 = buildAndAppendCircle(robotTwoGroupLeftArm, 320, 340, 30, "robotTwoLeftArm1", "#999999", 1);
    var robotTwoLeftArm2 = buildAndAppendCircle(robotTwoGroupLeftArm, 290, 390, 30, "robotTwoLeftArm2", "#999999", 1);
    var robotTwoleftArm3 = buildAndAppendCircle(robotTwoGroupLeftArm, 253, 435, 30, "robotTwoleftArm3", "#999999", 1);
    var robotTwoLeftArmHand = buildAndAppendCircle(robotTwoGroupLeftArm, 207, 478, 35, "robotTwoLeftArmHand", "#e69500", 1);
    var robotTwoLeftArmHandHide = buildAndAppendCircle(robotTwoGroupLeftArm, 190, 488, 30, "robotTwoLeftArmHandHide", "white", 1);

    var robotTwoGroupRightArm = robotTwoGroup.append("g");
    var robotTwoRightArm1 = buildAndAppendCircle(robotTwoGroupRightArm, 680, 340, 30, "robotTwoRightArm1", "#999999", 1);
    var robotTwoRightArm2 = buildAndAppendCircle(robotTwoGroupRightArm, 735, 357, 30, "robotTwoRightArm2", "#999999", 1);
    var robotTwoRightArm3 = buildAndAppendCircle(robotTwoGroupRightArm, 790, 374, 30, "robotTwoRightArm3", "#999999", 1);
    var robotTwoRightArmHand = buildAndAppendCircle(robotTwoGroupRightArm, 848, 400, 35, "robotTwoRightArmHand", "#e69500", 1);
    var robotTwoRightArmHandHide = buildAndAppendCircle(robotTwoGroupRightArm, 863, 406, 30, "robotTwoRightArmHandHide", "white", 1);

    robotTwoGroup.attr("transform", "scale(.5)translate(1620, 125)");
}
