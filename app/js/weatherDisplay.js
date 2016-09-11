function loadWeatherDisplay() {

    var weatherDisplayGroup = svgContainer.append("g").attr("id", "weatherDisplayGroup");

    var weatherLogo = weatherDisplayGroup.selectAll("image").data([0]);
        weatherLogo.enter()
        .append("svg:image")
        .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
        .attr("x", "960")
        .attr("y", "200")
        .attr("width", "130")
        .attr("height", "80")
        .attr("opacity", "0")
        .attr("id", "weatherLogo");

    var weatherLogoIntro = weatherDisplayGroup.append("text").text("Today's weather brought to you by")
        .attr("x", 730)
         .attr("y", 260)
         .attr("font-family", "sans-serif")
         .attr("font-size", "15px")
         .attr("fill", "grey")
         .style("font-weight", "normal")
         .attr("opacity", 0)
         .attr("id", "weatherLogoIntro");

     var currentTemperature = weatherDisplayGroup.append("text").text("placeHolder")
         .attr("x", 730)
          .attr("y", 360)
          .attr("font-family", "sans-serif")
          .attr("font-size", "30px")
          .attr("fill", "grey")
          .style("font-weight", "normal")
          .attr("opacity", 0)
          .attr("id", "currentTemperature");

      var currentWeatherIcon = weatherDisplayGroup.selectAll("image").data([0]);
          weatherLogo.enter()
          .append("svg:image")
          .attr("xlink:href", "http://icons.wxug.com/graphics/wu2/logo_130x80.png")
          .attr("x", 930)
          .attr("y", 360)
          .attr("width", "130")
          .attr("height", "80")
          .attr("opacity", "0")
          .attr("id", "currentWeatherIcon");
}
