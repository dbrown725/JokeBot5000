// https://bl.ocks.org/mbostock/5872848
var dispatch = d3.dispatch("iAmJokeBot");


function loadRobotOne() {

    var wholeSvgRect = svgContainer.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("fill", "white");

    var robotOneGroup = svgContainer.append("g");

    var robotOneGroupStartX = 150;

    var robotOneGroupStartY = 75;

    var robotOneGroupBody = robotOneGroup.append("g");


    var robotOneGroupHead = robotOneGroup.append("g").attr("id", "robotOneGroupHead");

    var leftAntenaData = [{
        "x": robotOneGroupStartX + 440,
        "y": robotOneGroupStartY + 170
    }, {
        "x": robotOneGroupStartX + 415,
        "y": robotOneGroupStartY + 130
    }];

    var leftAntenaFunction = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var leftAntenaGraph = robotOneGroupHead.append("path")
        .attr("d", leftAntenaFunction(leftAntenaData))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var rightAntenaData = [{
        "x": robotOneGroupStartX + 560,
        "y": 245
    }, {
        "x": robotOneGroupStartX + 585,
        "y": 205
    }];

    var rightAntenaFunction = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var leftAntenaCircle = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 415)
        .attr("cy", robotOneGroupStartY + 130)
        .attr("r", 12)
        .attr("id", "lAntenaCrcl")
        .attr("fill", "#e69500")
        .style("opacity", 1);


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

    var leftAntenaBoltFunction1 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var leftAntenaBoltLineGraph1 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", leftAntenaBoltFunction1(leftAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "leftAntenaBoltLineGraph1");

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

    var leftAntenaBoltFunction2 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var leftAntenaBoltLineGraph2 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", leftAntenaBoltFunction2(leftAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "leftAntenaBoltLineGraph2");

    var rightAntenaGraph = robotOneGroupHead.append("path")
        .attr("d", rightAntenaFunction(rightAntenaData))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var rightAntenaCircle = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 585)
        .attr("cy", robotOneGroupStartY + 130)
        .attr("r", 12)
        .style("fill", "#e69500")
        .style("opacity", 1);

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

    var rightAntenaBoltFunction1 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var rightAntenaBoltLineGraph1 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", rightAntenaBoltFunction1(rightAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "rightAntenaBoltLineGraph1");

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

    var rightAntenaBoltFunction2 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var rightAntenaBoltLineGraph2 = d3.select("#robotOneGroupHead").append("path")
        .attr("d", rightAntenaBoltFunction2(rightAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "rightAntenaBoltLineGraph2");

    var robotOneHead = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 500)
        .attr("cy", robotOneGroupStartY + 285)
        .attr("r", 135)
        .style("fill", "#cce6ff")
        .style("opacity", 1);

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
        .attr("id", "speaker")
        .style("opacity", 1);

    var robotOneHeadLeftEye = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 440)
        .attr("cy", robotOneGroupStartY + 215)
        .attr("r", 20)
        .style("fill", "white")
        .style("opacity", 1);

    var robotOneHeadRightEye = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 560)
        .attr("cy", robotOneGroupStartY + 215)
        .attr("r", 20)
        .style("fill", "white")
        .style("opacity", 1);

    var robotOneHeadLeftEyePupil = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 440)
        .attr("cy", robotOneGroupStartY + 215)
        .attr("r", 12)
        .style("fill", "black")
        .style("opacity", 1);

    var robotOneHeadRightEyePupil = robotOneGroupHead.append("circle")
        .attr("cx", robotOneGroupStartX + 560)
        .attr("cy", robotOneGroupStartY + 215)
        .attr("r", 12)
        .style("fill", "black")
        .style("opacity", 1);

    var robotOneBody = robotOneGroupBody.append("rect")
        .attr("x", robotOneGroupStartX + 350)
        .attr("y", robotOneGroupStartY + 300)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#cce6ff")
        .style("opacity", 1);

    var robotOneGroupLeftLeg = robotOneGroup.append("g");

    var robotOneLeftLeg1 = robotOneGroupLeftLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 430)
        .attr("cy", robotOneGroupStartY + 530)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneLeftLeg2 = robotOneGroupLeftLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 410)
        .attr("cy", robotOneGroupStartY + 585)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneleftLeg3 = robotOneGroupLeftLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 410)
        .attr("cy", robotOneGroupStartY + 640)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneLeftLegFoot = robotOneGroupLeftLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 410)
        .attr("cy", robotOneGroupStartY + 715)
        .attr("r", 50)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotOneLeftLegFootHide = robotOneGroupLeftLeg.append("rect")
        .attr("x", robotOneGroupStartX + 360)
        .attr("y", robotOneGroupStartY + 700)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "White")
        .style("opacity", 1);

    var robotOneGroupRightLeg = robotOneGroup.append("g");

    var robotOneRightLeg1 = robotOneGroupRightLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 570)
        .attr("cy", robotOneGroupStartY + 530)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneRightLeg2 = robotOneGroupRightLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 590)
        .attr("cy", robotOneGroupStartY + 585)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneRightLeg3 = robotOneGroupRightLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 590)
        .attr("cy", robotOneGroupStartY + 640)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneRightLegFoot = robotOneGroupRightLeg.append("circle")
        .attr("cx", robotOneGroupStartX + 590)
        .attr("cy", robotOneGroupStartY + 715)
        .attr("r", 50)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotOneRightLegFootHide = robotOneGroupRightLeg.append("rect")
        .attr("x", robotOneGroupStartX + 540)
        .attr("y", robotOneGroupStartY + 700)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "White")
        .style("opacity", 1);

    var robotOneGroupLeftArm = robotOneGroup.append("g");

    var robotOneLeftArm1 = robotOneGroupLeftArm.append("circle")
        .attr("cx", robotOneGroupStartX + 320)
        .attr("cy", robotOneGroupStartY + 340)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneLeftArm2 = robotOneGroupLeftArm.append("circle")
        .attr("cx", robotOneGroupStartX + 290)
        .attr("cy", robotOneGroupStartY + 390)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneleftArm3 = robotOneGroupLeftArm.append("circle")
        .attr("cx", robotOneGroupStartX + 253)
        .attr("cy", robotOneGroupStartY + 435)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneLeftArmHand = robotOneGroupLeftArm.append("circle")
        .attr("cx", robotOneGroupStartX + 207)
        .attr("cy", robotOneGroupStartY + 478)
        .attr("r", 35)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotOneLeftArmHandHide = robotOneGroupLeftArm.append("circle")
        .attr("cx", robotOneGroupStartX + 190)
        .attr("cy", robotOneGroupStartY + 488)
        .attr("r", 30)
        .style("fill", "white")
        .style("opacity", 1);

    var robotOneGroupRightArm = robotOneGroup.append("g");

    var robotOneRightArm1 = robotOneGroupRightArm.append("circle")
        .attr("cx", robotOneGroupStartX + 680)
        .attr("cy", robotOneGroupStartY + 340)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneRightArm2 = robotOneGroupRightArm.append("circle")
        .attr("cx", robotOneGroupStartX + 735)
        .attr("cy", robotOneGroupStartY + 357)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneRightArm3 = robotOneGroupRightArm.append("circle")
        .attr("cx", robotOneGroupStartX + 790)
        .attr("cy", robotOneGroupStartY + 374)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotOneRightArmHand = robotOneGroupRightArm.append("circle")
        .attr("cx", robotOneGroupStartX + 848)
        .attr("cy", robotOneGroupStartY + 400)
        .attr("r", 35)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotOneRightArmHandHide = robotOneGroupRightArm.append("circle")
        .attr("cx", robotOneGroupStartX + 863)
        .attr("cy", robotOneGroupStartY + 406)
        .attr("r", 30)
        .style("fill", "white")
        .style("opacity", 1);
}
