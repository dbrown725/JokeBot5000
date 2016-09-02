
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

    var leftAntenaGraph = robotThreeGroupHead.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(440, 170, 415, 130)))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var leftAntenaCircle = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 415)
        .attr("cy", robotThreeGroupStartY + 130)
        .attr("r", 12)
        .attr("id", "lAntenaCrcl")
        .attr("fill", "#e69500")
        .style("opacity", 1);


    var leftAntenaBoltData1 = [{
        "x": robotThreeGroupStartX + 390,
        "y": robotThreeGroupStartY + 130
    }, {
        "x": robotThreeGroupStartX + 360,
        "y": robotThreeGroupStartY + 150
    }, {
        "x": robotThreeGroupStartX + 340,
        "y": robotThreeGroupStartY + 130
    }, {
        "x": robotThreeGroupStartX + 325,
        "y": robotThreeGroupStartY + 150
    }, {
        "x": robotThreeGroupStartX + 315,
        "y": robotThreeGroupStartY + 130
    }, {
        "x": robotThreeGroupStartX + 310,
        "y": robotThreeGroupStartY + 150
    }];

    var robotThreeLeftAntenaBoltLineGraph1 = d3.select("#robotThreeGroupHead").append("path")
        .attr("d", lineDataAccessor(leftAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotThreeLeftAntenaBoltLineGraph1");

    var leftAntenaBoltData2 = [{
        "x": robotThreeGroupStartX + 420,
        "y": robotThreeGroupStartY + 110
    }, {
        "x": robotThreeGroupStartX + 435,
        "y": robotThreeGroupStartY + 95
    }, {
        "x": robotThreeGroupStartX + 425,
        "y": robotThreeGroupStartY + 75
    }, {
        "x": robotThreeGroupStartX + 440,
        "y": robotThreeGroupStartY + 60
    }, {
        "x": robotThreeGroupStartX + 430,
        "y": robotThreeGroupStartY + 50
    }, {
        "x": robotThreeGroupStartX + 445,
        "y": robotThreeGroupStartY + 45
    }];

    var robotThreeLeftAntenaBoltLineGraph2 = d3.select("#robotThreeGroupHead").append("path")
        .attr("d", lineDataAccessor(leftAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotThreeLeftAntenaBoltLineGraph2");

    var rightAntenaGraph = robotThreeGroupHead.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(560, 170, 585, 130)))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var rightAntenaCircle = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 585)
        .attr("cy", robotThreeGroupStartY + 130)
        .attr("r", 12)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var rightAntenaBoltData1 = [{
        "x": robotThreeGroupStartX + 610,
        "y": robotThreeGroupStartY + 130
    }, {
        "x": robotThreeGroupStartX + 635,
        "y": robotThreeGroupStartY + 150
    }, {
        "x": robotThreeGroupStartX + 660,
        "y": robotThreeGroupStartY + 140
    }, {
        "x": robotThreeGroupStartX + 685,
        "y": robotThreeGroupStartY + 160
    }, {
        "x": robotThreeGroupStartX + 710,
        "y": robotThreeGroupStartY + 150
    }, {
        "x": robotThreeGroupStartX + 735,
        "y": robotThreeGroupStartY + 170
    }];

    var robotThreeRightAntenaBoltLineGraph1 = d3.select("#robotThreeGroupHead").append("path")
        .attr("d", lineDataAccessor(rightAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotThreeRightAntenaBoltLineGraph1");

    var rightAntenaBoltData2 = [{
        "x": robotThreeGroupStartX + 585,
        "y": robotThreeGroupStartY + 100
    }, {
        "x": robotThreeGroupStartX + 600,
        "y": robotThreeGroupStartY + 75
    }, {
        "x": robotThreeGroupStartX + 580,
        "y": robotThreeGroupStartY + 55
    }, {
        "x": robotThreeGroupStartX + 600,
        "y": robotThreeGroupStartY + 40
    }, {
        "x": robotThreeGroupStartX + 580,
        "y": robotThreeGroupStartY + 30
    }, {
        "x": robotThreeGroupStartX + 600,
        "y": robotThreeGroupStartY + 15
    }];

    var robotThreeRightAntenaBoltLineGraph2 = d3.select("#robotThreeGroupHead").append("path")
        .attr("d", lineDataAccessor(rightAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotThreeRightAntenaBoltLineGraph2");

    var robotThreeHead = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 500)
        .attr("cy", robotThreeGroupStartY + 285)
        .attr("r", 135)
        .style("fill", "#ccffe5")
        .style("opacity", 1);

    var robotThreeHeadHide = robotThreeGroupHead.append("rect")
        .attr("x", robotThreeGroupStartX + 360)
        .attr("y", robotThreeGroupStartY + 270)
        .attr("width", 280)
        .attr("height", 30)
        .style("fill", "White")
        .style("opacity", 1);


    var robotThreeHeadSpeak = robotThreeGroupHead.append("rect")
        .attr("x", robotThreeGroupStartX + 365)
        .attr("y", robotThreeGroupStartY + 270)
        .attr("width", 269)
        .attr("height", 30)
        .attr("fill", "yellow")
        .attr("id", "robotThreeSpeaker")
        .style("opacity", 1);

    var robotThreeHeadLeftEye = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 440)
        .attr("cy", robotThreeGroupStartY + 215)
        .attr("r", 20)
        .style("fill", "white")
        .style("opacity", 1);

    var robotThreeHeadRightEye = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 560)
        .attr("cy", robotThreeGroupStartY + 215)
        .attr("r", 20)
        .style("fill", "white")
        .style("opacity", 1);

    var robotThreeHeadLeftEyePupil = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 440)
        .attr("cy", robotThreeGroupStartY + 215)
        .attr("r", 12)
        .style("fill", "black")
        .style("opacity", 1);

    var robotThreeHeadRightEyePupil = robotThreeGroupHead.append("circle")
        .attr("cx", robotThreeGroupStartX + 560)
        .attr("cy", robotThreeGroupStartY + 215)
        .attr("r", 12)
        .style("fill", "black")
        .style("opacity", 1);

    var robotThreeBody = robotThreeGroupBody.append("rect")
        .attr("x", robotThreeGroupStartX + 350)
        .attr("y", robotThreeGroupStartY + 300)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#ccffe5")
        .style("opacity", 1);

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


    // var leftDrumStickData = [{
    //     "x": robotThreeGroupStartX + 280,
    //     "y": robotThreeGroupStartY + 390
    // }, {
    //     "x": robotThreeGroupStartX + 430,
    //     "y": robotThreeGroupStartY + 360
    // }];

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

    // var rightDrumStickData = [{
    //     "x": robotThreeGroupStartX + 575,
    //     "y": robotThreeGroupStartY + 425
    // }, {
    //     "x": robotThreeGroupStartX + 410,
    //     "y": robotThreeGroupStartY + 340
    // }];

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
    //
    // var snareStandData = [{
    //     "x": robotThreeGroupStartX + 335,
    //     "y": robotThreeGroupStartY + 518
    // }, {
    //     "x": robotThreeGroupStartX + 335,
    //     "y": robotThreeGroupStartY + 720
    // }];

    var snareStandGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(335, 518, 335, 720)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    // var snareStandLeftLegData = [{
    //     "x": robotThreeGroupStartX + 335,
    //     "y": robotThreeGroupStartY + 720
    // }, {
    //     "x": robotThreeGroupStartX + 280,
    //     "y": robotThreeGroupStartY + 760
    // }];

    var snareStandLeftLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(335, 720, 280, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    // var snareStandRightLegData = [{
    //     "x": robotThreeGroupStartX + 335,
    //     "y": robotThreeGroupStartY + 720
    // }, {
    //     "x": robotThreeGroupStartX + 390,
    //     "y": robotThreeGroupStartY + 760
    // }];

    var snareStandRightLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(335, 720, 390, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    // var cymbalStandData = [{
    //     "x": robotThreeGroupStartX + 685,
    //     "y": robotThreeGroupStartY + 338
    // }, {
    //     "x": robotThreeGroupStartX + 685,
    //     "y": robotThreeGroupStartY + 720
    // }];

    var cymbalStandGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(685, 338, 685, 720)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    // var cymbalStandLeftLegData = [{
    //     "x": robotThreeGroupStartX + 685,
    //     "y": robotThreeGroupStartY + 720
    // }, {
    //     "x": robotThreeGroupStartX + 630,
    //     "y": robotThreeGroupStartY + 760
    // }];

    var cymbalStandLeftLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(685, 720, 630, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    // var cymbalStandRightLegData = [{
    //     "x": robotThreeGroupStartX + 685,
    //     "y": robotThreeGroupStartY + 720
    // }, {
    //     "x": robotThreeGroupStartX + 740,
    //     "y": robotThreeGroupStartY + 760
    // }];

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

    // var kickStandLeftLegData = [{
    //     "x": robotThreeGroupStartX + 445,
    //     "y": robotThreeGroupStartY + 720
    // }, {
    //     "x": robotThreeGroupStartX + 400,
    //     "y": robotThreeGroupStartY + 760
    // }];

    var kickStandLeftLegGraph = robotThreeGroupDrumKit.append("path")
        .attr("d", lineDataAccessor(buildLineDataRobotThree(445, 720, 400, 760)))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "none");


    // var kickStandRightLegData = [{
    //     "x": robotThreeGroupStartX + 555,
    //     "y": robotThreeGroupStartY + 720
    // }, {
    //     "x": robotThreeGroupStartX + 600,
    //     "y": robotThreeGroupStartY + 760
    // }];

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
