
function loadRobotOne() {

    var robotOneGroup = svgContainer.append("g");

    var robotOneGroupBody = robotOneGroup.append("g");

    var robotOneGroupHead = robotOneGroup.append("g").attr("id", "robotOneGroupHead");

    var leftAntena = buildAndAppendPath(robotOneGroupHead, buildLineData(440, 170, 415, 130), "#999999", 6, "leftAntenaGraph", "");
    var leftAntenaCircle = buildAndAppendCircle(robotOneGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);
    var leftAntenaBoltData1 = buildXYPointObjectArray([[390, 130],[360,150],[340,130],[325,150],[315,130],[310,150]]);
    var robotOneLeftAntenaBoltLineGraph1 = buildAndAppendPath(robotOneGroupHead, leftAntenaBoltData1, "white", 3, "robotOneLeftAntenaBoltLineGraph1", "none");
    var leftAntenaBoltData2 = buildXYPointObjectArray([[420, 110],[435,95],[425,75],[440,60],[430,50],[445,45]]);
    var robotOneLeftAntenaBoltLineGraph2 = buildAndAppendPath(robotOneGroupHead, leftAntenaBoltData2, "white", 3, "robotOneLeftAntenaBoltLineGraph2", "none");

    var rightAntena = buildAndAppendPath(robotOneGroupHead, buildLineData(560, 170, 585, 130), "#999999", 6, "rightAntenaGraph", "none");
    var rightAntenaCircle = buildAndAppendCircle(robotOneGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);
    var rightAntenaBoltData1 = buildXYPointObjectArray([[610, 130],[635,150],[660,140],[685,160],[710,150],[735,170]]);
    var robotOneRightAntenaBoltLineGraph1 = buildAndAppendPath(robotOneGroupHead, rightAntenaBoltData1, "white", 3, "robotOneRightAntenaBoltLineGraph1", "none");
    var rightAntenaBoltData2 = buildXYPointObjectArray([[585, 100],[600,75],[580,55],[600,40],[580,30],[600,15]]);
    var robotOneRightAntenaBoltLineGraph2 = buildAndAppendPath(robotOneGroupHead, rightAntenaBoltData2, "white", 3, "robotOneRightAntenaBoltLineGraph2", "none");

    var robotOneHead = buildAndAppendCircle(robotOneGroupHead, 500, 285, 135, "robotOneHead", "#cce6ff", 1);
    var robotOneHeadHide = buildAndAppendRect(robotOneGroupHead, 365, 270, 269, 30, "robotOneHeadHide", "white", 1);
    var robotOneSpeaker = buildAndAppendPath(robotOneGroupHead, buildLineData(365, 285, 634, 285), "yellow", 30, "robotOneSpeaker", "none");

    var robotOneHeadLeftEye = buildAndAppendCircle(robotOneGroupHead, 440, 215, 20, "robotOneHeadLeftEye", "white", 1);
    var robotOneHeadRightEye = buildAndAppendCircle(robotOneGroupHead, 560, 215, 20, "robotOneHeadRightEye", "white", 1);
    var robotOneHeadLeftEyePupil = buildAndAppendCircle(robotOneGroupHead, 440, 215, 12, "robotOneHeadLeftEyePupil", "black", 1);
    var robotOneHeadRightEyePupil = buildAndAppendCircle(robotOneGroupHead, 560, 215, 12, "robotOneHeadRightEyePupil", "black", 1);

    var robotOneBody = buildAndAppendRect(robotOneGroupBody, 350, 300, 300, 200, "robotOneBody", "#cce6ff", 1);

    var robotOneGroupLeftLeg = robotOneGroup.append("g");
    var robotOneLeftLeg1 = buildAndAppendCircle(robotOneGroupLeftLeg, 430, 530, 30, "robotOneLeftLeg1", "999999", 1);
    var robotOneLeftLeg2 = buildAndAppendCircle(robotOneGroupLeftLeg, 410, 585, 30, "robotOneLeftLeg2", "999999", 1);
    var robotOneleftLeg3 = buildAndAppendCircle(robotOneGroupLeftLeg, 410, 640, 30, "robotOneLeftLeg1", "999999", 1);
    var robotOneLeftLegFoot = buildAndAppendCircle(robotOneGroupLeftLeg, 410, 715, 50, "robotOneLeftLegFoot", "#e69500", 1);
    var robotOneLeftLegFootHide = buildAndAppendRect(robotOneGroupLeftLeg, 360, 700, 100, 100, "robotOneLeftLegFootHide", "white", 1);

    var robotOneGroupRightLeg = robotOneGroup.append("g");
    var robotOneRightLeg1 = buildAndAppendCircle(robotOneGroupRightLeg, 570, 530, 30, "robotOneRightLeg1", "999999", 1);
    var robotOneRightLeg2 = buildAndAppendCircle(robotOneGroupRightLeg, 590, 585, 30, "robotOneRightLeg2", "999999", 1);
    var robotOneRightLeg3 = buildAndAppendCircle(robotOneGroupRightLeg, 590, 640, 30, "robotOneRightLeg3", "999999", 1);
    var robotOneRightLegFoot = buildAndAppendCircle(robotOneGroupRightLeg, 590, 715, 50, "robotOneRightLegFoot", "#e69500", 1);
    var robotOneRightLegFootHide = buildAndAppendRect(robotOneGroupRightLeg, 540, 700, 100, 100, "robotOneRightLegFootHide", "white", 1);

    var robotOneGroupLeftArm = robotOneGroup.append("g");
    var robotOneLeftArm1 = buildAndAppendCircle(robotOneGroupLeftArm, 320, 340, 30, "robotOneLeftArm1", "#999999", 1);
    var robotOneLeftArm2 = buildAndAppendCircle(robotOneGroupLeftArm, 290, 390, 30, "robotOneLeftArm2", "#999999", 1);
    var robotOneleftArm3 = buildAndAppendCircle(robotOneGroupLeftArm, 253, 435, 30, "robotOneleftArm3", "#999999", 1);
    var robotOneLeftArmHand = buildAndAppendCircle(robotOneGroupLeftArm, 207, 478, 35, "robotOneLeftArmHand", "#e69500", 1);
    var robotOneLeftArmHandHide = buildAndAppendCircle(robotOneGroupLeftArm, 190, 488, 30, "robotOneLeftArmHandHide", "white", 1);

    var robotOneGroupRightArm = robotOneGroup.append("g");
    var robotOneRightArm1 = buildAndAppendCircle(robotOneGroupRightArm, 680, 340, 30, "robotOneRightArm1", "#999999", 1);
    var robotOneRightArm2 = buildAndAppendCircle(robotOneGroupRightArm, 735, 357, 30, "robotOneRightArm2", "#999999", 1);
    var robotOneRightArm3 = buildAndAppendCircle(robotOneGroupRightArm, 790, 374, 30, "robotOneRightArm3", "#999999", 1);
    var robotOneRightArmHand = buildAndAppendCircle(robotOneGroupRightArm, 848, 400, 35, "robotOneRightArmHand", "#e69500", 1);
    var robotOneRightArmHandHide = buildAndAppendCircle(robotOneGroupRightArm, 863, 406, 30, "robotOneRightArmHandHide", "white", 1);

    //eyeBlink("robotOne", 2000, "green");
    //eyeBlink("robotOne", 4000, "green");

    robotOneGroup.attr("transform", "translate(150, 75)");
}
