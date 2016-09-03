
function loadRobotThree() {

    var robotThreeGroup = svgContainer.append("g").attr("id", "robotThreeGroup");

    var robotThreeGroupBody = robotThreeGroup.append("g");

    var robotThreeGroupHead = robotThreeGroup.append("g").attr("id", "robotThreeGroupHead");

    var robotThreeGroupDrumKit = robotThreeGroup.append("g").attr("id", "robotThreeGroupDrumKit");

    var leftAntena = buildAndAppendPath(robotThreeGroupHead, buildLineData(440, 170, 415, 130), "#999999", 6, "leftAntenaGraph", "");
    var leftAntenaCircle = buildAndAppendCircle(robotThreeGroupHead, 415, 130, 12, "leftAntenaCircle", "#e69500", 1);
    var leftAntenaBoltData1 = buildXYPointObjectArray([[390, 130],[360,150],[340,130],[325,150],[315,130],[310,150]]);
    var robotThreeLeftAntenaBoltLineGraph1 = buildAndAppendPath(robotThreeGroupHead, leftAntenaBoltData1, "white", 3, "robotThreeLeftAntenaBoltLineGraph1", "none");
    var leftAntenaBoltData2 = buildXYPointObjectArray([[420, 110],[435,95],[425,75],[440,60],[430,50],[445,45]]);
    var robotThreeLeftAntenaBoltLineGraph2 = buildAndAppendPath(robotThreeGroupHead, leftAntenaBoltData2, "white", 3, "robotThreeLeftAntenaBoltLineGraph2", "none");

    var rightAntena = buildAndAppendPath(robotThreeGroupHead, buildLineData(560, 170, 585, 130), "#999999", 6, "rightAntenaGraph", "none");
    var rightAntenaCircle = buildAndAppendCircle(robotThreeGroupHead, 585, 130, 12, "rightAntenaCircle", "#e69500", 1);
    var rightAntenaBoltData1 = buildXYPointObjectArray([[610, 130],[635,150],[660,140],[685,160],[710,150],[735,170]]);
    var robotThreeRightAntenaBoltLineGraph1 = buildAndAppendPath(robotThreeGroupHead, rightAntenaBoltData1, "white", 3, "robotThreeRightAntenaBoltLineGraph1", "none");
    var rightAntenaBoltData2 = buildXYPointObjectArray([[585, 100],[600,75],[580,55],[600,40],[580,30],[600,15]]);
    var robotThreeRightAntenaBoltLineGraph2 = buildAndAppendPath(robotThreeGroupHead, rightAntenaBoltData2, "white", 3, "robotThreeRightAntenaBoltLineGraph2", "none");

    var robotThreeHead = buildAndAppendCircle(robotThreeGroupHead, 500, 285, 135, "robotThreeHead", "#ccffe5", 1);
    var robotThreeHeadHide = buildAndAppendRect(robotThreeGroupHead, 366, 271, 268, 28, "robotThreeHeadHide", "white", 1);
    var robotThreeSpeaker = buildAndAppendPath(robotThreeGroupHead, buildLineData(365, 285, 634, 285), "yellow", 30, "robotThreeSpeaker", "none");

    var robotThreeHeadLeftEye = buildAndAppendCircle(robotThreeGroupHead, 440, 215, 20, "robotThreeHeadLeftEye", "white", 1);
    var robotThreeHeadRightEye = buildAndAppendCircle(robotThreeGroupHead, 560, 215, 20, "robotThreeHeadRightEye", "white", 1);
    var robotThreeHeadLeftEyePupil = buildAndAppendCircle(robotThreeGroupHead, 440, 215, 12, "robotThreeHeadLeftEyePupil", "black", 1);
    var robotThreeHeadRightEyePupil = buildAndAppendCircle(robotThreeGroupHead, 560, 215, 12, "robotThreeHeadRightEyePupil", "black", 1);

    var robotThreeBody = buildAndAppendRect(robotThreeGroupBody, 350, 300, 300, 200, "robotThreeBody", "#ccffe5", 1);

    var robotThreeGroupLeftArm = robotThreeGroupBody.append("g");
    var robotThreeLeftArm1 = buildAndAppendCircle(robotThreeGroupLeftArm, 320, 340, 30, "robotThreeLeftArm1", "#999999", 1);
    var robotThreeLeftArm2 = buildAndAppendCircle(robotThreeGroupLeftArm, 270, 360, 30, "robotThreeLeftArm2", "#999999", 1);
    var robotThreeleftArm3 = buildAndAppendCircle(robotThreeGroupLeftArm, 280, 380, 30, "robotThreeleftArm3", "#999999", 1);
    var robotThreeLeftArmHand = buildAndAppendCircle(robotThreeGroupLeftArm, 290, 400, 35, "robotThreeLeftArmHand", "#e69500", 1);
    var robotThreeLeftArmHandHide = buildAndAppendCircle(robotThreeGroupLeftArm, 310, 400, 30, "robotThreeLeftArmHandHide", "white", 1);
    var leftDrumStickGraph = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(280, 390, 430, 369), "#f2ca7f", 8, "leftDrumStick", "none");

    var robotThreeGroupRightArm = robotThreeGroupBody.append("g");
    var robotThreeRightArm1 = buildAndAppendCircle(robotThreeGroupRightArm, 680, 340, 30, "robotThreeRightArm1", "#999999", 1);
    var robotThreeRightArm2 = buildAndAppendCircle(robotThreeGroupRightArm, 670, 400, 30, "robotThreeRightArm2", "#999999", 1);
    var robotThreeRightArm3 = buildAndAppendCircle(robotThreeGroupRightArm, 620, 420, 30, "robotThreeRightArm3", "#999999", 1);
    var robotThreeRightArmHand = buildAndAppendCircle(robotThreeGroupRightArm, 560, 420, 35, "robotThreeRightArmHand", "#e69500", 1);
    var robotThreeRightArmHandHide = buildAndAppendCircle(robotThreeGroupRightArm, 545, 425, 30, "robotThreeRightArmHandHide", "#ccffe5", 1);
    var rightDrumStick = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(575, 425, 410, 340), "#f2ca7f", 8, "rightDrumStick", "none");

    var robotThreeGroupDrumKitSnare = buildAndAppendRect(robotThreeGroupDrumKit, 300, 355, 250, 100, "robotThreeGroupDrumKitSnare", "#ccc", 1);
    robotThreeGroupDrumKitSnare.attr("stroke", "black").attr("stroke-width", 2).attr("transform", "rotate(10)");

    var snareStand = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(335, 518, 335, 720), "black", 3, "snareStand", "none");
    var snareStandLeftLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(335, 720, 280, 760), "black", 3, "snareStandLeftLeg", "none");
    var snareStandRightLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(335, 720, 390, 760), "black", 3, "snareStandRightLeg", "none");

    var cymbalStand = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(685, 338, 685, 720), "black", 3, "cymbalStand", "none");
    var cymbalStandLeftLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(685, 720, 630, 760), "black", 3, "cymbalStandLeftLeg", "none");
    var cymbalStandRightLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(685, 720, 740, 760), "black", 3, "cymbalStandRightLeg", "none");
    var cymbal = robotThreeGroupDrumKit.append("ellipse")
       .attr("cx", 600)
       .attr("cy", 480)
       .attr("rx", 160 )
       .attr("ry", 30 )
       .attr("id", "cymbal")
       .attr("transform", "rotate(-10)")
       .style("fill", "gold");

    var kickStandLeftLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(445, 720, 400, 760), "black", 3, "kickStandLeftLeg", "none");
    var kickStandRightLeg = buildAndAppendPath(robotThreeGroupDrumKit, buildLineData(555, 720, 600, 760), "black", 3, "kickStandRightLeg", "none");

    var robotThreeGroupDrumKitKick = buildAndAppendCircle(robotThreeGroupDrumKit, 500, 600, 160, "robotThreeGroupDrumKitKick", "#ccc", 1);
    robotThreeGroupDrumKitKick.attr("stroke", "black").attr("stroke-width", 2);

    var robotThreeGroupDrumKitKickTextJokeBot = robotThreeGroupDrumKit.append("text").text("JokeBot")
			.attr("x", 265)
			 .attr("y", 680)
			 .attr("font-family", "sans-serif")
			 .attr("font-size", "60px")
			 .attr("fill", "white")
			 .style("font-weight", "bold")
             .attr("transform", "rotate(-10)");

     var robotThreeGroupDrumKitKickText5000 = robotThreeGroupDrumKit.append("text").text("5000")
 			.attr("x", 320)
 			 .attr("y", 740)
 			 .attr("font-family", "sans-serif")
 			 .attr("font-size", "60px")
 			 .attr("fill", "white")
 			 .style("font-weight", "bold")
              .attr("transform", "rotate(-10)");

    robotThreeGroup.attr("transform", "scale(.35)translate(100, 125)");
}
