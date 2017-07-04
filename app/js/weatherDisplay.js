function loadWeatherDisplay() {

    var weatherDisplayGroup = svgContainer.append("g").attr("id", "weatherDisplayGroup");

    var weatherLogo = weatherDisplayGroup.selectAll("image").data([0]);
        weatherLogo.enter()
        .append("svg:image")
        .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
        .attr("x", "960")
        .attr("y", "50")
        .attr("width", "130")
        .attr("height", "80")
        .attr("opacity", "0")
        .attr("id", "weatherLogo");

    var weatherLogoIntro = weatherDisplayGroup.append("text").text("Today's weather brought to you by")
        .attr("x", 730)
         .attr("y", 110)
         .attr("font-family", "sans-serif")
         .attr("font-size", "15px")
         .attr("fill", "grey")
         .style("font-weight", "normal")
         .attr("opacity", 0)
         .attr("id", "weatherLogoIntro");

     var currentWeatherIcon = weatherDisplayGroup.selectAll("image").data([0]);
         weatherLogo.enter()
         .append("svg:image")
         .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
         .attr("x", 730)
         .attr("y", 120)
         .attr("width", "130")
         .attr("height", "80")
         .attr("opacity", "0")
         .attr("id", "currentWeatherIcon");

     var currentTemperature = weatherDisplayGroup.append("text").text("placeHolder")
         .attr("x", 930)
          .attr("y", 170)
          .attr("font-family", "sans-serif")
          .attr("font-size", "30px")
          .attr("fill", "grey")
          .style("font-weight", "normal")
          .attr("opacity", 0)
          .attr("id", "currentTemperature");

     var forecast1Icon = weatherDisplayGroup.selectAll("image").data([0]);
         weatherLogo.enter()
         .append("svg:image")
         .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
         .attr("x", 570)
         .attr("y", 230)
         .attr("width", "65")
         .attr("height", "40")
         .attr("opacity", "0")
         .attr("id", "forecast1Icon");

      var forecast1Line1 = weatherDisplayGroup.append("text").text("placeHolder")
          .attr("x", 640)
           .attr("y", 250)
           .attr("font-family", "sans-serif")
           .attr("font-size", "12px")
           .attr("fill", "grey")
           .style("font-weight", "normal")
           .attr("opacity", 0)
           .attr("id", "forecast1Line1");

       var forecast1Line2 = weatherDisplayGroup.append("text").text("placeHolder")
           .attr("x", 640)
            .attr("y", 270)
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "grey")
            .style("font-weight", "normal")
            .attr("opacity", 0)
            .attr("id", "forecast1Line2");

        var forecast2Icon = weatherDisplayGroup.selectAll("image").data([0]);
            weatherLogo.enter()
            .append("svg:image")
            .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
            .attr("x", 570)
            .attr("y", 290)
            .attr("width", "65")
            .attr("height", "40")
            .attr("opacity", "0")
            .attr("id", "forecast2Icon");

       var forecast2Line1 = weatherDisplayGroup.append("text").text("placeHolder")
           .attr("x", 640)
            .attr("y", 310)
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "grey")
            .style("font-weight", "normal")
            .attr("opacity", 0)
            .attr("id", "forecast2Line1");

        var forecast2Line2 = weatherDisplayGroup.append("text").text("placeHolder")
            .attr("x", 640)
             .attr("y", 330)
             .attr("font-family", "sans-serif")
             .attr("font-size", "12px")
             .attr("fill", "grey")
             .style("font-weight", "normal")
             .attr("opacity", 0)
             .attr("id", "forecast2Line2");

        var forecast3Icon = weatherDisplayGroup.selectAll("image").data([0]);
             weatherLogo.enter()
             .append("svg:image")
             .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
             .attr("x", 570)
             .attr("y", 490)
             .attr("width", "65")
             .attr("height", "40")
             .attr("opacity", "0")
             .attr("id", "forecast3Icon");

        var forecast3Line1 = weatherDisplayGroup.append("text").text("placeHolder")
            .attr("x", 640)
             .attr("y", 510)
             .attr("font-family", "sans-serif")
             .attr("font-size", "12px")
             .attr("fill", "grey")
             .style("font-weight", "normal")
             .attr("opacity", 0)
             .attr("id", "forecast3Line1");

         var forecast3Line2 = weatherDisplayGroup.append("text").text("placeHolder")
             .attr("x", 640)
              .attr("y", 530)
              .attr("font-family", "sans-serif")
              .attr("font-size", "12px")
              .attr("fill", "grey")
              .style("font-weight", "normal")
              .attr("opacity", 0)
              .attr("id", "forecast3Line2");

          var forecast4Icon = weatherDisplayGroup.selectAll("image").data([0]);
               weatherLogo.enter()
               .append("svg:image")
               .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
               .attr("x", 570)
               .attr("y", 550)
               .attr("width", "65")
               .attr("height", "40")
               .attr("opacity", "0")
               .attr("id", "forecast4Icon");

          var forecast4Line1 = weatherDisplayGroup.append("text").text("placeHolder")
              .attr("x", 640)
               .attr("y", 570)
               .attr("font-family", "sans-serif")
               .attr("font-size", "12px")
               .attr("fill", "grey")
               .style("font-weight", "normal")
               .attr("opacity", 0)
               .attr("id", "forecast4Line1");

           var forecast4Line2 = weatherDisplayGroup.append("text").text("placeHolder")
               .attr("x", 640)
                .attr("y", 590)
                .attr("font-family", "sans-serif")
                .attr("font-size", "12px")
                .attr("fill", "grey")
                .style("font-weight", "normal")
                .attr("opacity", 0)
                .attr("id", "forecast4Line2");

        buildForcastSection(weatherDisplayGroup, weatherLogo, 3, 570, 500);

}

var buildForcastSection = function(weatherDisplayGroup, weatherLogo, index, xPos, yPos){
    weatherDisplayGroup.selectAll("image").data([0]);
        weatherLogo.enter()
        .append("svg:image")
        .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
        .attr("x", xPos)
        .attr("y", yPos)
        .attr("width", "65")
        .attr("height", "40")
        .attr("opacity", "0")
        .attr("id", "forecast" + index + "Icon");

   weatherDisplayGroup.append("text").text("placeHolder")
       .attr("x", xPos + 70)
        .attr("y", yPos + 20)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "grey")
        .style("font-weight", "normal")
        .attr("opacity", 0)
        .attr("id", "forecast" + index + "Line1");

   weatherDisplayGroup.append("text").text("placeHolder")
        .attr("x", xPos + 70)
         .attr("y", yPos + 40)
         .attr("font-family", "sans-serif")
         .attr("font-size", "12px")
         .attr("fill", "grey")
         .style("font-weight", "normal")
         .attr("opacity", 0)
         .attr("id", "forecast" + index + "Line2");
}
