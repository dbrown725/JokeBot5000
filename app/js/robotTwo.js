
function loadRobotTwo() {

    console.log('wholeSvgRect', wholeSvgRect);



    var robotTwoGroup = svgContainer.append("g");

    var robotTwoGroupStartX = 1550;

    var robotTwoGroupStartY = 25;

    var robotTwoGroupBody = robotTwoGroup.append("g");


    var robotTwoGroupHead = robotTwoGroup.append("g").attr("id", "robotTwoGroupHead");

    var leftAntenaData = [{
        "x": robotTwoGroupStartX + 440,
        "y": robotTwoGroupStartY + 170
    }, {
        "x": robotTwoGroupStartX + 415,
        "y": robotTwoGroupStartY + 130
    }];

    var leftAntenaFunction = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var leftAntenaGraph = robotTwoGroupHead.append("path")
        .attr("d", leftAntenaFunction(leftAntenaData))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var rightAntenaData = [{
        "x": robotTwoGroupStartX + 560,
        "y": robotTwoGroupStartY + 170
    }, {
        "x": robotTwoGroupStartX + 585,
        "y": robotTwoGroupStartY + 130
    }];

    var rightAntenaFunction = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var leftAntenaCircle = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 415)
        .attr("cy", robotTwoGroupStartY + 130)
        .attr("r", 12)
        .attr("id", "lAntenaCrcl")
        .attr("fill", "#e69500")
        .style("opacity", 1);


    var leftAntenaBoltData1 = [{
        "x": robotTwoGroupStartX + 390,
        "y": robotTwoGroupStartY + 130
    }, {
        "x": robotTwoGroupStartX + 360,
        "y": robotTwoGroupStartY + 150
    }, {
        "x": robotTwoGroupStartX + 340,
        "y": robotTwoGroupStartY + 130
    }, {
        "x": robotTwoGroupStartX + 325,
        "y": robotTwoGroupStartY + 150
    }, {
        "x": robotTwoGroupStartX + 315,
        "y": robotTwoGroupStartY + 130
    }, {
        "x": robotTwoGroupStartX + 310,
        "y": robotTwoGroupStartY + 150
    }];

    var leftAntenaBoltFunction1 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var robotTwoLeftAntenaBoltLineGraph1 = d3.select("#robotTwoGroupHead").append("path")
        .attr("d", leftAntenaBoltFunction1(leftAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotTwoLeftAntenaBoltLineGraph1");

    var leftAntenaBoltData2 = [{
        "x": robotTwoGroupStartX + 420,
        "y": robotTwoGroupStartY + 110
    }, {
        "x": robotTwoGroupStartX + 435,
        "y": robotTwoGroupStartY + 95
    }, {
        "x": robotTwoGroupStartX + 425,
        "y": robotTwoGroupStartY + 75
    }, {
        "x": robotTwoGroupStartX + 440,
        "y": robotTwoGroupStartY + 60
    }, {
        "x": robotTwoGroupStartX + 430,
        "y": robotTwoGroupStartY + 50
    }, {
        "x": robotTwoGroupStartX + 445,
        "y": robotTwoGroupStartY + 45
    }];

    var leftAntenaBoltFunction2 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var robotTwoLeftAntenaBoltLineGraph2 = d3.select("#robotTwoGroupHead").append("path")
        .attr("d", leftAntenaBoltFunction2(leftAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotTwoLeftAntenaBoltLineGraph2");

    var rightAntenaGraph = robotTwoGroupHead.append("path")
        .attr("d", rightAntenaFunction(rightAntenaData))
        .attr("stroke", "#999999")
        .attr("stroke-width", 6)
        .attr("fill", "none");

    var rightAntenaCircle = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 585)
        .attr("cy", robotTwoGroupStartY + 130)
        .attr("r", 12)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var rightAntenaBoltData1 = [{
        "x": robotTwoGroupStartX + 610,
        "y": robotTwoGroupStartY + 130
    }, {
        "x": robotTwoGroupStartX + 635,
        "y": robotTwoGroupStartY + 150
    }, {
        "x": robotTwoGroupStartX + 660,
        "y": robotTwoGroupStartY + 140
    }, {
        "x": robotTwoGroupStartX + 685,
        "y": robotTwoGroupStartY + 160
    }, {
        "x": robotTwoGroupStartX + 710,
        "y": robotTwoGroupStartY + 150
    }, {
        "x": robotTwoGroupStartX + 735,
        "y": robotTwoGroupStartY + 170
    }];

    var rightAntenaBoltFunction1 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var robotTwoRightAntenaBoltLineGraph1 = d3.select("#robotTwoGroupHead").append("path")
        .attr("d", rightAntenaBoltFunction1(rightAntenaBoltData1))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotTwoRightAntenaBoltLineGraph1");

    var rightAntenaBoltData2 = [{
        "x": robotTwoGroupStartX + 585,
        "y": robotTwoGroupStartY + 100
    }, {
        "x": robotTwoGroupStartX + 600,
        "y": robotTwoGroupStartY + 75
    }, {
        "x": robotTwoGroupStartX + 580,
        "y": robotTwoGroupStartY + 55
    }, {
        "x": robotTwoGroupStartX + 600,
        "y": robotTwoGroupStartY + 40
    }, {
        "x": robotTwoGroupStartX + 580,
        "y": robotTwoGroupStartY + 30
    }, {
        "x": robotTwoGroupStartX + 600,
        "y": robotTwoGroupStartY + 15
    }];

    var rightAntenaBoltFunction2 = d3.svg.line()
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .interpolate("linear");

    var robotTwoRightAntenaBoltLineGraph2 = d3.select("#robotTwoGroupHead").append("path")
        .attr("d", rightAntenaBoltFunction2(rightAntenaBoltData2))
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("fill", "none")
        .attr("id", "robotTwoRightAntenaBoltLineGraph2");

    var robotTwoHead = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 500)
        .attr("cy", robotTwoGroupStartY + 285)
        .attr("r", 135)
        .style("fill", "#ffcce6")
        .style("opacity", 1);

    var robotTwoHeadHide = robotTwoGroupHead.append("rect")
        .attr("x", robotTwoGroupStartX + 360)
        .attr("y", robotTwoGroupStartY + 270)
        .attr("width", 280)
        .attr("height", 30)
        .style("fill", "White")
        .style("opacity", 1);


    var robotTwoHeadSpeak = robotTwoGroupHead.append("rect")
        .attr("x", robotTwoGroupStartX + 365)
        .attr("y", robotTwoGroupStartY + 270)
        .attr("width", 269)
        .attr("height", 30)
        .attr("fill", "yellow")
        .attr("id", "robotTwoSpeaker")
        .style("opacity", 1);

    var robotTwoHeadLeftEye = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 440)
        .attr("cy", robotTwoGroupStartY + 215)
        .attr("r", 20)
        .style("fill", "white")
        .style("opacity", 1);

    var robotTwoHeadRightEye = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 560)
        .attr("cy", robotTwoGroupStartY + 215)
        .attr("r", 20)
        .style("fill", "white")
        .style("opacity", 1);

    var robotTwoHeadLeftEyePupil = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 440)
        .attr("cy", robotTwoGroupStartY + 215)
        .attr("r", 12)
        .style("fill", "black")
        .style("opacity", 1);

    var robotTwoHeadRightEyePupil = robotTwoGroupHead.append("circle")
        .attr("cx", robotTwoGroupStartX + 560)
        .attr("cy", robotTwoGroupStartY + 215)
        .attr("r", 12)
        .style("fill", "black")
        .style("opacity", 1);

    var robotTwoBody = robotTwoGroupBody.append("rect")
        .attr("x", robotTwoGroupStartX + 350)
        .attr("y", robotTwoGroupStartY + 300)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#ffcce6")
        .style("opacity", 1);

    var robotTwoGroupLeftLeg = robotTwoGroup.append("g");

    var robotTwoLeftLeg1 = robotTwoGroupLeftLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 430)
        .attr("cy", robotTwoGroupStartY + 530)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoLeftLeg2 = robotTwoGroupLeftLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 410)
        .attr("cy", robotTwoGroupStartY + 585)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoleftLeg3 = robotTwoGroupLeftLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 410)
        .attr("cy", robotTwoGroupStartY + 640)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoLeftLegFoot = robotTwoGroupLeftLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 410)
        .attr("cy", robotTwoGroupStartY + 715)
        .attr("r", 50)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotTwoLeftLegFootHide = robotTwoGroupLeftLeg.append("rect")
        .attr("x", robotTwoGroupStartX + 360)
        .attr("y", robotTwoGroupStartY + 700)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "White")
        .style("opacity", 1);

    var robotTwoGroupRightLeg = robotTwoGroup.append("g");

    var robotTwoRightLeg1 = robotTwoGroupRightLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 570)
        .attr("cy", robotTwoGroupStartY + 530)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoRightLeg2 = robotTwoGroupRightLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 590)
        .attr("cy", robotTwoGroupStartY + 585)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoRightLeg3 = robotTwoGroupRightLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 590)
        .attr("cy", robotTwoGroupStartY + 640)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoRightLegFoot = robotTwoGroupRightLeg.append("circle")
        .attr("cx", robotTwoGroupStartX + 590)
        .attr("cy", robotTwoGroupStartY + 715)
        .attr("r", 50)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotTwoRightLegFootHide = robotTwoGroupRightLeg.append("rect")
        .attr("x", robotTwoGroupStartX + 540)
        .attr("y", robotTwoGroupStartY + 700)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "White")
        .style("opacity", 1);

    var robotTwoGroupLeftArm = robotTwoGroup.append("g");

    var robotTwoLeftArm1 = robotTwoGroupLeftArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 320)
        .attr("cy", robotTwoGroupStartY + 340)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoLeftArm2 = robotTwoGroupLeftArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 290)
        .attr("cy", robotTwoGroupStartY + 390)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoleftArm3 = robotTwoGroupLeftArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 253)
        .attr("cy", robotTwoGroupStartY + 435)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoLeftArmHand = robotTwoGroupLeftArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 207)
        .attr("cy", robotTwoGroupStartY + 478)
        .attr("r", 35)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotTwoLeftArmHandHide = robotTwoGroupLeftArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 190)
        .attr("cy", robotTwoGroupStartY + 488)
        .attr("r", 30)
        .style("fill", "white")
        .style("opacity", 1);

    var robotTwoGroupRightArm = robotTwoGroup.append("g");

    var robotTwoRightArm1 = robotTwoGroupRightArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 680)
        .attr("cy", robotTwoGroupStartY + 340)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoRightArm2 = robotTwoGroupRightArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 735)
        .attr("cy", robotTwoGroupStartY + 357)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoRightArm3 = robotTwoGroupRightArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 790)
        .attr("cy", robotTwoGroupStartY + 374)
        .attr("r", 30)
        .style("fill", "#999999")
        .style("opacity", 1);

    var robotTwoRightArmHand = robotTwoGroupRightArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 848)
        .attr("cy", robotTwoGroupStartY + 400)
        .attr("r", 35)
        .style("fill", "#e69500")
        .style("opacity", 1);

    var robotTwoRightArmHandHide = robotTwoGroupRightArm.append("circle")
        .attr("cx", robotTwoGroupStartX + 863)
        .attr("cy", robotTwoGroupStartY + 406)
        .attr("r", 30)
        .style("fill", "white")
        .style("opacity", 1);

    robotTwoGroup
    .attr("transform", "scale(.5)translate(70, 100)");
}
